import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
 


const firebaseAuth = firebase.initializeApp({
  apiKey: "AIzaSyDH8ahvPhe138oZFhHbrcG19m3n0jnAYuk",
  authDomain: "medica-da652.firebaseapp.com",
  projectId: "medica-da652",
  storageBucket: "medica-da652.appspot.com",
  messagingSenderId: "713198535754",
  appId: "1:713198535754:web:adbe8b6aa277b67d0e12b3",
});

export const auth = firebaseAuth.auth();
export const db = firebaseAuth.firestore()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebaseAuth;

