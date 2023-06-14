import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // Add your Firebase project configuration here
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
