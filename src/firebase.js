// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPhwHLMArG_c5MLzHuusbW5ohRVQM2nE8",
  authDomain: "student-g-sys.firebaseapp.com",
  projectId: "student-g-sys",
  storageBucket: "student-g-sys.appspot.com",
  messagingSenderId: "380460291899",
  appId: "1:380460291899:web:7baadbc4447f882129091e",
  measurementId: "G-QR0BC334VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db}