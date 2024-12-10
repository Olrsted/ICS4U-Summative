import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyCDhz4SXTNVgye4Oi1yxWI48t1t_hl5qyU",
    authDomain: "summative-68a5a.firebaseapp.com",
    projectId: "summative-68a5a",
    storageBucket: "summative-68a5a.firebasestorage.app",
    messagingSenderId: "314282881265",
    appId: "1:314282881265:web:7f9cb848d288a72e19b950"
};

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };