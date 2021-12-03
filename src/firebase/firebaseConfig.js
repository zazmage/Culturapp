// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaDgXSFQ9V86dHoeXp7KhEC0wcBTuORTg",
  authDomain: "culturapp-8a3de.firebaseapp.com",
  projectId: "culturapp-8a3de",
  storageBucket: "culturapp-8a3de.appspot.com",
  messagingSenderId: "58260657637",
  appId: "1:58260657637:web:124f2fe3c313979b130b0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const authGoogle = new GoogleAuthProvider();
