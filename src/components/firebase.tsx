// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'  ; //it helps to register user
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCynPI2ur4IYu1HY2lFFr4bNQpzVDLL8Jg",
  authDomain: "comcast-73a4d.firebaseapp.com",
  projectId: "comcast-73a4d",
  storageBucket: "comcast-73a4d.firebasestorage.app",
  messagingSenderId: "812102880377",
  appId: "1:812102880377:web:82d10109c4febee48f18a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)

export default app;


