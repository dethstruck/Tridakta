import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA6m-JDy5T06F--KV5nZ33OtUBaScfnc2E",
    authDomain: "tridakta.firebaseapp.com",
    projectId: "tridakta",
    storageBucket: "tridakta.firebasestorage.app",
    messagingSenderId: "38017184918",
    appId: "1:38017184918:web:edab693d10abf9b0debeb7",
    measurementId: "G-MXVSH15LW6"
}

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);