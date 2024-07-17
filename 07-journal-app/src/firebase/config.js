// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1QwLOp24xeh9S5yqSxgHpBL9eSoHn2Jk",
  authDomain: "react-cursos-fh-6911e.firebaseapp.com",
  projectId: "react-cursos-fh-6911e",
  storageBucket: "react-cursos-fh-6911e.appspot.com",
  messagingSenderId: "674410822936",
  appId: "1:674410822936:web:4dec57254712d32c57326d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);