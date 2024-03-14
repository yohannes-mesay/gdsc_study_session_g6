// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCIENkXvGs__oMW2YnPtkshvZM-2okWc",
  authDomain: "projectauth-b842b.firebaseapp.com",
  projectId: "projectauth-b842b",
  storageBucket: "projectauth-b842b.appspot.com",
  messagingSenderId: "965828270129",
  appId: "1:965828270129:web:16f5c2f2720ef5cec11d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)