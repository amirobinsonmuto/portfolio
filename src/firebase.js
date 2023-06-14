import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFxj53k_JuIt8gYhs7Bm7GHDGfHQzMUfo",
  authDomain: "ami-portfolio-51dde.firebaseapp.com",
  projectId: "ami-portfolio-51dde",
  storageBucket: "ami-portfolio-51dde.appspot.com",
  messagingSenderId: "440310956760",
  appId: "1:440310956760:web:6be19095e37686733a8dad",
  measurementId: "G-X9JS6YXX4H",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
