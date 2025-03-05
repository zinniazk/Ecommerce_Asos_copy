// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAyTeGYm9FSnaQc50mGZuXJugNQlOInPo",
  authDomain: "asos-copy.firebaseapp.com",
  projectId: "asos-copy",
  storageBucket: "asos-copy.firebasestorage.app",
  messagingSenderId: "719936553252",
  appId: "1:719936553252:web:7c3cee0a30a28bd601f3b1",
  measurementId: "G-MXVGECSCS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);