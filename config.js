// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFCF7_yOZ_wRATnaNx1X3LRmsyetQe4RI",
  authDomain: "wanfx-66c65.firebaseapp.com",
  projectId: "wanfx-66c65",
  storageBucket: "wanfx-66c65.firebasestorage.app",
  messagingSenderId: "44515785173",
  appId: "1:44515785173:web:e7eaf23b247ed4c88ba55c",
  measurementId: "G-9CHB5PRJ7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);