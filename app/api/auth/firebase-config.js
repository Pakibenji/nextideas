// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAWr9ydhTXRdAYxS8aDHf8Wa61nN2xDdgk",
  authDomain: "next-app-ideas-28bec.firebaseapp.com",
  projectId: "next-app-ideas-28bec",
  storageBucket: "next-app-ideas-28bec.appspot.com",
  messagingSenderId: "341834521229",
  appId: "1:341834521229:web:1d84a1aeb238e8175c60c4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
