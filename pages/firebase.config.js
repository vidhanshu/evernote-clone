import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4QnyxAYg7ewgvWwY0UgfQ1OoLeIs4nbo",
    authDomain: "evernote-72455.firebaseapp.com",
    projectId: "evernote-72455",
    storageBucket: "evernote-72455.appspot.com",
    messagingSenderId: "586597796576",
    appId: "1:586597796576:web:23aa27e862a45e94789e85",
    measurementId: "G-YYB66Z844L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);