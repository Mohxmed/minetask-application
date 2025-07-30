import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyf80pZ9mI1sKOSd5IFT9Aj01nWC9_Mcs",
  authDomain: "minetask-c4e6d.firebaseapp.com",
  projectId: "minetask-c4e6d",
  storageBucket: "minetask-c4e6d.firebasestorage.app",
  messagingSenderId: "79169110142",
  appId: "1:79169110142:web:3dce2716cd284e98d9d82f",
  measurementId: "G-4F95VC9CLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const database = getFirestore(app);

export { auth, analytics, database };
