// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlUlhPwXmuJoN8or2OJjUu3c5FLC_665s",
  authDomain: "netflixgpt-2f15b.firebaseapp.com",
  projectId: "netflixgpt-2f15b",
  storageBucket: "netflixgpt-2f15b.appspot.com",
  messagingSenderId: "727547794854",
  appId: "1:727547794854:web:2da22a0902e4fef651ab67",
  measurementId: "G-E72JYT4EKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();