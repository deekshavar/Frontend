// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication module
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1CaN5KeLZdYI47tB0QBomwO2Z5F5oJwE",
  authDomain: "frontend-a4b42.firebaseapp.com",
  projectId: "frontend-a4b42",
  storageBucket: "frontend-a4b42.appspot.com",
  messagingSenderId: "659109890204",
  appId: "1:659109890204:web:331bd896db689d35dc4559"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };