// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZw3izsTMQSH8SdGH-A2Yto-J30Rj_ts",
  authDomain: "react-cursos-8d967.firebaseapp.com",
  projectId: "react-cursos-8d967",
  storageBucket: "react-cursos-8d967.appspot.com",
  messagingSenderId: "778113096672",
  appId: "1:778113096672:web:a1b06c742b9c656fffe985"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);