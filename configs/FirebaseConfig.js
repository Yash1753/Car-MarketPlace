// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "autohub-aed25.firebaseapp.com",
  projectId: "autohub-aed25",
  storageBucket: "autohub-aed25.firebasestorage.app",
  messagingSenderId: "690014111364",
  appId: "1:690014111364:web:589ef3fa778d6cedd164d1",
  measurementId: "G-1BKK1L6X85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)