// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtYjoAPhas3pxKM8QuWVwe5dLvnc2Xdp0",
  authDomain: "easylearnbackend.firebaseapp.com",
  projectId: "easylearnbackend",
  storageBucket: "easylearnbackend.appspot.com",
  messagingSenderId: "587295933315",
  appId: "1:587295933315:web:d2f3df0ee8c33e9c066cb6",
  measurementId: "G-8JFDKNRHBK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
