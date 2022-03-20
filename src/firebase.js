// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1e5GRikV7gToEVD6zESJP901Bajh6Jto",
  authDomain: "cocktail-project-ed428.firebaseapp.com",
  projectId: "cocktail-project-ed428",
  storageBucket: "cocktail-project-ed428.appspot.com",
  messagingSenderId: "918755741052",
  appId: "1:918755741052:web:f008264adaa581c3f4a8f9",
  measurementId: "G-Z10HKHJXRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
// const auth = firebase.auth();

export { db };
