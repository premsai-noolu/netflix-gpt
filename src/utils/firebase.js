// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVSZIxvnj9EqamkVScn1iDiLaINcbyXhs",
  authDomain: "netflix-gpt-2dfab.firebaseapp.com",
  projectId: "netflix-gpt-2dfab",
  storageBucket: "netflix-gpt-2dfab.appspot.com",
  messagingSenderId: "1093487830079",
  appId: "1:1093487830079:web:c46699f04344157b2c448a",
  measurementId: "G-3RJPZS8X52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
