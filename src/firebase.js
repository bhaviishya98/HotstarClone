import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"; 
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD58aWa4V6uAnm3y2pCuKA-SM6ZBvHnGbE",
  authDomain: "disneyplus-hotstar-7cabd.firebaseapp.com",
  projectId: "disneyplus-hotstar-7cabd",
  storageBucket: "disneyplus-hotstar-7cabd.appspot.com",
  messagingSenderId: "254202406739",
  appId: "1:254202406739:web:85be5d995832704a42e3a6",
  measurementId: "G-W434FCTNEB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
