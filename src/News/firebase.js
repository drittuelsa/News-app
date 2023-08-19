// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zEMP5A_4rHhlihtg6CSWsd2d0dWBfLw",
  authDomain: "react-auth-4624f.firebaseapp.com",
  projectId: "react-auth-4624f",
  storageBucket: "react-auth-4624f.appspot.com",
  messagingSenderId: "852090087876",
  appId: "1:852090087876:web:aafbba8a70c0cea84cdc91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);