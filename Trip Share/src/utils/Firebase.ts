import { initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { appState } from "../store";
import { getFirestore, doc, getDoc, collection, getDocs, updateDoc, addDoc, setDoc, Firestore, onSnapshot, arrayUnion, arrayRemove } from "firebase/firestore";
import { Auth, browserLocalPersistence, createUserWithEmailAndPassword, EmailAuthProvider, getAuth, reauthenticateWithCredential, setPersistence, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA8b5kXUDZUVrpOz4JmOBoSeLtypGP5k-Y",
    authDomain: "tripshare-dfe1f.firebaseapp.com",
    projectId: "tripshare-dfe1f",
    storageBucket: "tripshare-dfe1f.appspot.com",
    messagingSenderId: "886862273014",
    appId: "1:886862273014:web:070aebd379465e64b84fd7"
};

// Variables para almacenar las instancias de Firestore y Auth
let db: Firestore | undefined;
let auth: Auth | undefined;
let storage: FirebaseStorage | undefined;

export const getFirebaseInstance = async () => {
    if (!db || !auth || !storage) {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
        storage = getStorage(app); // Explicitly pass the app instance
    }

    return { db, auth, storage };
};


export const addPost = async (post: any) => {
    try {
        const { db } = await getFirebaseInstance();

        if (!auth) {
            throw new Error('Firestore instance is not initialized.');
        }

        const currentUser = auth.currentUser;
        if (!currentUser) {
            console.error("User is not authenticated");
            return Promise.reject("User is not authenticated");
        }

        const postsCollection = collection(db, 'posts');
        await addDoc(postsCollection, { ...post, userId: currentUser.uid });

        console.log('Post added successfully');
    } catch (error) {
        console.error('Error adding post:', error);
    }
};

export async function uploadPost(postInfo: { user: string, postDescription: string, postHashtags: string, postLocation: string, photo: string}) {
    let imageUrl = '';


    try {
        console.log(JSON.stringify(auth))
        if (!db) {
            throw new Error('Firestore instance is not initialized.');
        }

        const docRef = await addDoc(collection(db, 'posts'), {

            description: postInfo.postDescription,
            hashtags: postInfo.postHashtags,
            location: postInfo.postLocation,
            image: postInfo.photo,

            user: postInfo.user,

        });
        console.log('Document written with ID: ', docRef.id);
        await updateDoc(docRef, {id: docRef.id})
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

export const getPosts = async () => {
    try {
        const { db } = await getFirebaseInstance();

        const postsCollection = collection(db, 'posts');
        const querySnapshot = await getDocs(postsCollection);
        const data: any[] = [];

        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    } catch (error) {
        console.error('Error getting documents', error);
    }
}

export const getPostsDocs = async (onPostsUpdate: (data: any[]) => void) => {
    try {
        console.log('Getting posts');
        const { db } = await getFirebaseInstance();
        if (!db) {
            throw new Error('Firestore instance is not initialized.');
        }

        console.log('Firestore instance:', db);

        const postsCollection = collection(db, 'posts');

        console.log('Got posts collection:', postsCollection);


        const unsubscribe = onSnapshot(postsCollection, (querySnapshot) =>{
            const data: any[] = [];
            querySnapshot.forEach((doc) => data.push({id: doc.id, ...doc.data()}));
            console.log('Received posts', data);
            onPostsUpdate(data);
        })

        return unsubscribe;

    } catch (error) {
        console.error('Error getting documents', error);

    }
}


export const getUser = async (userId: string) => {
    // Asegurarse de que `db` esté inicializado
    const { db } = await getFirebaseInstance();

    // Crear la referencia al documento y obtener los datos
    const docRef = doc(db, "users", userId);
    const userData = await getDoc(docRef);

    return userData.exists() ? userData.data() : null;
};

export const loginUser = async (email: string, password: string) => {
    if (!email || !password) {
        alert("Please fill in all fields.");
        return Promise.reject("Please fill in all fields");
    }

    const { auth } = await getFirebaseInstance();

    try {
        // Configurando la persistencia
        await setPersistence(auth, browserLocalPersistence);

        // Intentando iniciar sesión con Firebase
        const credentials = await signInWithEmailAndPassword(auth, email, password);

        // Si el login es exitoso, retornamos el UID del usuario
        return Promise.resolve(auth.currentUser?.uid);

    } catch (error) {
        console.error("Error during authentication", error);
        return Promise.reject("Authentication failure, wrong credentials");
    }
};

export const logoutUser = async () => {
    try {
        const { auth } = await getFirebaseInstance();
        await signOut(auth);
    } catch (error) {
        console.error("Error during logout:", error);
    }
};

export const registerUser = async (credentials: any) => {
    try {
        const { auth, db } = await getFirebaseInstance();
        const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

        const where = doc(db, 'users', userCredential.user.uid);
        const data = {
            age: `${credentials.day}-${credentials.month}-${credentials.year}`,
            name: credentials.name,
            lastName: credentials.lastName,
            username: credentials.username,
            region: credentials.region,
            photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
            followers: [],
            following: [],

        };

        await setDoc(where, data);
        return true;
    } catch (error) {
        if (!credentials.email || !credentials.password) {
            console.error("Email or password missing.");
            return false;
        }
    }
};

export const uploadFile = async (file: File, id: string) => {
    const { storage } = await getFirebaseInstance();
    const { ref, uploadBytes } = await import('firebase/storage');

    const storageRef = ref(storage, 'imagesProfile/' + id);
    uploadBytes(storageRef, file)
        .then((snapshot) => {
            console.log('File uploaded');
        })
        .catch((error) => {
            console.error('Error uploading file:', error);
        });
};

export const getFile = async (id: string) => {
    const { storage } = await getFirebaseInstance();
    const { ref, getDownloadURL } = await import('firebase/storage');

    const storageRef = ref(storage, 'imagesProfile/' + id);
    try {
        const urlImg = await getDownloadURL(storageRef);
        return urlImg;
    } catch (error) {
        console.error('Error fetching file:', error);
        return null;
    }
};

export const getPostsByUser = async () => {
    try {
        const { db } = await getFirebaseInstance();
        const { collection, getDocs, query, where } = await import('firebase/firestore');

        const ref = collection(db, 'posts');
        const q = query(ref, where('userUid', '==', appState.user));
        const querySnapshot = await getDocs(q);
        const data: any[] = [];

        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });

        return data;
    } catch (error) {
        console.error('Error getting documents', error);
    }
};

export const updateUserFollow = async (userId: string, targetUserId: string, action: 'follow' | 'unfollow') => {
    try {
        const { db } = await getFirebaseInstance();
        const userDocRef = doc(db, 'users', userId);
        const targetUserDocRef = doc(db, 'users', targetUserId);

        // Si la acción es "follow", agregar el targetUserId a los sets correspondientes
        if (action === 'follow') {
            // Actualizar "following" del usuario
            await updateDoc(userDocRef, {
                following: arrayUnion(targetUserId)
            });

            // Actualizar "followers" del usuario objetivo
            await updateDoc(targetUserDocRef, {
                followers: arrayUnion(userId)
            });
        }
        // Si la acción es "unfollow", eliminar el targetUserId de los sets correspondientes
        else if (action === 'unfollow') {
            // Eliminar "following" del usuario
            await updateDoc(userDocRef, {
                following: arrayRemove(targetUserId)
            });

            // Eliminar "followers" del usuario objetivo
            await updateDoc(targetUserDocRef, {
                followers: arrayRemove(userId)
            });
        }
        return true;
    } catch (error) {
        console.error("Error updating follow information: ", error);
        return false;
    }
};


export const getFollowing = async (userId: string): Promise<string[]> => {
    try {

        const db = getFirestore();


        const userDocRef = doc(db, "users", userId);


        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const following = userData.following || []; // Si no existe, retorna un array vacío
            return following;
        } else {
            console.warn(`User with ID ${userId} does not exist.`);
            return [];
        }
    } catch (error) {
        console.error("Error fetching following list:", error);
        return [];
    }
};

export const updateProfileEdit = async (
    userId: string,
    newPhoto: string | null,
    newDescription: string | null,
    currentPassword: string | null,
    newPassword: string | null
) => {
    try {
        const auth = getAuth();
        const db = getFirestore();

        // Obtener el usuario actual
        const user = auth.currentUser;

        if (!user) {
            console.error("User is not logged in.");
            return false;
        }

        // Reautenticación para cambiar la contraseña
        if (currentPassword && newPassword) {
            // Crear las credenciales de autenticación con la contraseña actual
            const credentials = EmailAuthProvider.credential(user.email!, currentPassword);

            // Reautenticar al usuario
            await reauthenticateWithCredential(user, credentials);

            // Cambiar la contraseña
            await updatePassword(user, newPassword);
            console.log("Password updated successfully.");
        }

        // Actualizar la photo y la description en Firestore si no son null
        const userRef = doc(db, "users", userId);

        // Filtrar solo los campos no nulos
        const updatedData: { [key: string]: string } = {};
        if (newPhoto !== null) updatedData.photo = newPhoto;
        if (newDescription !== null) updatedData.description = newDescription;

        // Solo actualizar si hay datos para modificar
        if (Object.keys(updatedData).length > 0) {
            await updateDoc(userRef, updatedData);
            console.log("Profile updated successfully.");
        } else {
            console.log("No updates to apply.");
        }

        return true;
    } catch (error) {
        console.error("Error updating profile:", error);
        return false;
    }
};