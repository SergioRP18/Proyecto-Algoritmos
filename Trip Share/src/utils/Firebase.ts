let db: any;

const getFirestoreInstance = async () => {
    if(!db){
        const {getFirestore} = await import ('firebase/firestore')
        const {initializeApp} = await import ('firebase/app')

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
    }
    return db;
};