// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrbFN_1b2-sMZycF3vlnuuXVseLSmD-pU",
  authDomain: "fir-day-52dd7.firebaseapp.com",
  projectId: "fir-day-52dd7",
  storageBucket: "fir-day-52dd7.appspot.com",
  messagingSenderId: "464560084591",
  appId: "1:464560084591:web:b3a5cf690b4f1b4bc2df9a",
  measurementId: "G-BBBQ6NPEQY"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAbPN26dconA9qta8CnC6kt_du9XoL87Gk",
//   authDomain: "contratistas-41e0c.firebaseapp.com",
//   projectId: "contratistas-41e0c",
//   storageBucket: "contratistas-41e0c.appspot.com",
//   messagingSenderId: "346105690764",
//   appId: "1:346105690764:web:18bbe21c23b8b88ed359a9",
//   measurementId: "G-F5RCSE6KGQ",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
//const analytics = getAnalytics(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();