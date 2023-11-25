import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBbBFWzA2iANKedPBhFvIyFD5ZkNpYVK4",
  authDomain: "sharek-ada21.firebaseapp.com",
  projectId: "sharek-ada21",
  storageBucket: "sharek-ada21.appspot.com",
  messagingSenderId: "82606865347",
  appId: "1:82606865347:web:952d66dc8673e50c075b76",
  measurementId: "G-DJN5QDL283",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
