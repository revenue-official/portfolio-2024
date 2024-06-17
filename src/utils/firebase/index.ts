// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkm9Q1DxeckotHoC393CQAqcjzWnGPd3o",
  authDomain: "test-localhost-423308.firebaseapp.com",
  projectId: "test-localhost-423308",
  storageBucket: "test-localhost-423308.appspot.com",
  messagingSenderId: "779366709042",
  appId: "1:779366709042:web:11c0763c00ecc5f2c2c92b",
  measurementId: "G-9KHF5VYETG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
