import { getDocs } from 'firebase/firestore';

let db: any;
let auth: any;

export const getFirebaseInstance = async () => {
    if(!db){
        const {getFirestore} = await import ('firebase/firestore')
        const {initializeApp} = await import ('firebase/app')
        const { getAuth, signOut } = await import('firebase/auth');

        const firebaseConfig = {
        apiKey: "AIzaSyA8b5kXUDZUVrpOz4JmOBoSeLtypGP5k-Y",
        authDomain: "tripshare-dfe1f.firebaseapp.com",
        projectId: "tripshare-dfe1f",
        storageBucket: "tripshare-dfe1f.appspot.com",
        messagingSenderId: "886862273014",
        appId: "1:886862273014:web:070aebd379465e64b84fd7"
        };

        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
    }
    return { db, auth };
};

export const addPost = async (post: any) => {
    try{
        const {db} = await getFirebaseInstance();
        const {collection, addDoc} = await import('firebase/firestore');

        const where = collection(db, 'posts');
        await addDoc(where, post);
        console.log('Se añadió con exito');
    } catch (error){
        console.error('Error adding document', error);
    }
};

export const getPosts = async () => {
    try {
        const {db} = await getFirebaseInstance();
        const {collection, addDoc} = await import('firebase/firestore');

        const where = collection(db, 'posts');
        const querySnapshot = await getDocs(where);
        const data: any[] = [];

        querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});

        return data;
    } catch (error){
        console.error('Error getting documents', error);
    }
}

export const loginUser = async (email: string, password: string) => {
    if (!email || !password) {
        alert("Please fill in all fields.");
        return Promise.reject("Please fill in all fields");
    }
    const { auth } = await getFirebaseInstance();
    const { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } = await import('firebase/auth');

    try {
        await setPersistence(auth, browserLocalPersistence);
    } catch (error) {
        console.error(error);
        return Promise.reject("Error setting up Persistence");
    }

    let credentials;
    try {
        credentials = await signInWithEmailAndPassword(auth, email, password);
    } catch(error) {
        return Promise.reject("Authentication failure, wrong credentials");
    }

    return Promise.resolve(auth.currentUser?.uid);

};

export const logoutUser = async () => {
    try {
        const { auth } = await getFirebaseInstance();
        const { signOut } = await import('firebase/auth');
        await signOut(auth);
    } catch (error) {
        console.error("Error during logout:", error);
    }
};

export const registerUser = async (credentials: any) => {
	try {
		const { auth, db } = await getFirebaseInstance();
		const { createUserWithEmailAndPassword } = await import('firebase/auth');
		const { doc, setDoc } = await import('firebase/firestore');

		const userCredential = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);

		const where = doc(db, 'users', userCredential.user.uid);
		const data = {
			age: `${credentials.day}-${credentials.month}-${credentials.year}`,
			name: credentials.name,
            lastName: credentials.lastName,
			region: credentials.region,
		};

		await setDoc(where, data);
		return true;
	} catch (error) {
		console.error("Error de Firebase:", error);
		return false;
	}
};
