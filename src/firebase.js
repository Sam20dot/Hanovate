// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0fnkkRFBBp3bvyP3wXyFTf408DRU7r9Y",
  authDomain: "hanovate.firebaseapp.com",
  projectId: "hanovate",
  storageBucket: "hanovate.firebasestorage.app",
  messagingSenderId: "1039581019270",
  appId: "1:1039581019270:web:c852177cedc3c9d8ace507",
  measurementId: "G-RCXJ1EJWLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);   
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider ,db};