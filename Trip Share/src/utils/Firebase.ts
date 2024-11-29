import { initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { appState } from "../store";
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, setDoc, Firestore } from "firebase/firestore";
import { Auth, browserLocalPersistence, createUserWithEmailAndPassword, getAuth, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8b5kXUDZUVrpOz4JmOBoSeLtypGP5k-Y",
    authDomain: "tripshare-dfe1f.firebaseapp.com",
    projectId: "tripshare-dfe1f",
    storageBucket: "tripshare-dfe1f.appspot.com",
    messagingSenderId: "886862273014",
    appId: "1:886862273014:web:070aebd379465e64b84fd7"
};

// Variables para almacenar las instancias de Firestore y Auth
let db: Firestore;
let auth: Auth;
let storage: FirebaseStorage;

export const getFirebaseInstance = async () => {
    if (!db) {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
		storage = getStorage();

    }
    return { db, auth, storage };
};
export const addPost = async (post: any) => {
    try {
        const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');
        
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

export const getPosts = async () => {
    try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs } = await import('firebase/firestore');

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

export const getUser = async (userId: string) => {
    const { db } = await getFirebaseInstance();

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
            photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
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