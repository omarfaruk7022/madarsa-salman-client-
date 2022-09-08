// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADtdWx4tA6_fO92N-wfuE0vj3QiVEFhAE",
  authDomain: "madrasa-salman.firebaseapp.com",
  projectId: "madrasa-salman",
  storageBucket: "madrasa-salman.appspot.com",
  messagingSenderId: "719355660945",
  appId: "1:719355660945:web:0b9e121809365f2c3bcd30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;