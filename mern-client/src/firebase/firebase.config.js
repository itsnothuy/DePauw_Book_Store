// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJlBrI1SUWvbxHkK_1RZBeAXTBTOjJXhw",
  authDomain: "mern-book-inventory-7ffa5.firebaseapp.com",
  projectId: "mern-book-inventory-7ffa5",
  storageBucket: "mern-book-inventory-7ffa5.appspot.com",
  messagingSenderId: "422735934105",
  appId: "1:422735934105:web:54faf6dcbb9a514b0f3e08",
  measurementId: "G-6JQRFR9YNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app