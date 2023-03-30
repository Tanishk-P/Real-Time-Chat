import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8qqGnLCvCDKLS9wPk3aTb1GmAzQfktYM",
  authDomain: "live-chat-1520.firebaseapp.com",
  projectId: "live-chat-1520",
  storageBucket: "live-chat-1520.appspot.com",
  messagingSenderId: "454642945341",
  appId: "1:454642945341:web:46d419051cb6fd7e63c954"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);