// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwVOb9vGkZcC_Q1rsn2UcECSS3Cr5ODEY",
    authDomain: "wrco-77639.firebaseapp.com",
    projectId: "wrco-77639",
    storageBucket: "wrco-77639.firebasestorage.app",
    messagingSenderId: "208898707037",
    appId: "1:208898707037:web:0d5b41576857551c2d47b4",
    measurementId: "G-HF7ZRH4BXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);