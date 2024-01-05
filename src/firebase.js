// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNTrHPheJsFK0-z6EVcs0Xk3gZZ9_MI3g",
  authDomain: "mobile-app-a7feb.firebaseapp.com",
  projectId: "mobile-app-a7feb",
  storageBucket: "mobile-app-a7feb.appspot.com",
  messagingSenderId: "749677947694",
  appId: "1:749677947694:web:001b938ecfc5f72d9b68bf",
  measurementId: "G-REH3D9X4RF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
