// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfziAlJ6s8v-JHLN7c1-oTaZ1P91qZ3Ks",
  authDomain: "project-progress-tracker-d7ee0.firebaseapp.com",
  projectId: "project-progress-tracker-d7ee0",
  storageBucket: "project-progress-tracker-d7ee0.appspot.com",
  messagingSenderId: "433528371417",
  appId: "1:433528371417:web:e8911f88e0b0542d2e26c8",
  measurementId: "G-S97ZFLPPHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { db, auth, provider };
