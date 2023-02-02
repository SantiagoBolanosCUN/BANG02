// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsymdy84_hJXyf53uleGeARh4AxtgXmrg",
  authDomain: "space-bang.firebaseapp.com",
  projectId: "space-bang",
  storageBucket: "space-bang.appspot.com",
  messagingSenderId: "51255824567",
  appId: "1:51255824567:web:822ac7344d50fc2fdbbd32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
