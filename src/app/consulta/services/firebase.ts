// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB8m6p1wepdKlRsm6scI9fN62Byr5I_DM",
  authDomain: "testing-backend-consultapp.firebaseapp.com",
  projectId: "testing-backend-consultapp",
  storageBucket: "testing-backend-consultapp.firebasestorage.app",
  messagingSenderId: "26922811506",
  appId: "1:26922811506:web:f47e5d8274a4a2b37642eb",
  measurementId: "G-5GT3EYPHPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);