// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8V4S2Jtg83bY4MClZRPOf9kXsga1AKcg",
    authDomain: "vite-contact-b9e70.firebaseapp.com",
    projectId: "vite-contact-b9e70",
    storageBucket: "vite-contact-b9e70.appspot.com",
    messagingSenderId: "29567415070",
    appId: "1:29567415070:web:844aa78bd26e356a9b8f0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);