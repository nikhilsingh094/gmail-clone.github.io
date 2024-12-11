


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8tCN5nCpuVEmlCNF-ewCL2pzBgvV3jjc",
  authDomain: "clone-5353e.firebaseapp.com",
  projectId: "clone-5353e",
  storageBucket: "clone-5353e.firebasestorage.app",
  messagingSenderId: "927768040422",
  appId: "1:927768040422:web:ad9b4e5ab9e0fc9934bc27",
  measurementId: "G-S2323Q1LN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider
