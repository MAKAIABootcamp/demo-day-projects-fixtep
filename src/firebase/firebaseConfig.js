// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrbFN_1b2-sMZycF3vlnuuXVseLSmD-pU",
  authDomain: "fir-day-52dd7.firebaseapp.com",
  projectId: "fir-day-52dd7",
  storageBucket: "fir-day-52dd7.appspot.com",
  messagingSenderId: "464560084591",
  appId: "1:464560084591:web:b3a5cf690b4f1b4bc2df9a",
  measurementId: "G-BBBQ6NPEQY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
