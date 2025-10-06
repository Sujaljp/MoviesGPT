// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBADEHPfDIqd_Fm0s6OufwNi2F7kj97uhs",
  authDomain: "moviesgpt-71312.firebaseapp.com",
  projectId: "moviesgpt-71312",
  storageBucket: "moviesgpt-71312.firebasestorage.app",
  messagingSenderId: "1044153014879",
  appId: "1:1044153014879:web:07dc23b84eb5642d7599ea",
  measurementId: "G-XLN34SDZQG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth()


