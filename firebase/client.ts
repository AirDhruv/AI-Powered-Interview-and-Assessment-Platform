import { initializeApp , getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyA8NfUcBvkPS7ODEjlaBX4RjEqX4voNnLA",
  authDomain: "raven-e420c.firebaseapp.com",
  projectId: "raven-e420c",
  storageBucket: "raven-e420c.firebasestorage.app",
  messagingSenderId: "467401668941",
  appId: "1:467401668941:web:40dbfb70c599d6ccd25f04",
  measurementId: "G-WMT9RFVEVJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
