
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzxr6zGXv8OXApEduuz4lHuOaOVcAktLA",
  authDomain: "bareessential.firebaseapp.com",
  projectId: "bareessential",
  storageBucket: "bareessential.appspot.com",
  messagingSenderId: "1010952941726",
  appId: "1:1010952941726:web:de6152ef4f27ee06e40b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

