// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFdnyZPgHLw27B5-dZa1ezARD4IiNj-Us",
    authDomain: "chat-app-9e6ac.firebaseapp.com",
    projectId: "chat-app-9e6ac",
    storageBucket: "chat-app-9e6ac.appspot.com",
    messagingSenderId: "390179458566",
    appId: "1:390179458566:web:f26f76f03bd23b3728bd87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)