import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCMoa4ad1kjCej7yuYV8470JuhBk59DM04",
  authDomain: "juvetic-reto3.firebaseapp.com",
  projectId: "juvetic-reto3",
  storageBucket: "juvetic-reto3.appspot.com",
  messagingSenderId: "654172272517",
  appId: "1:654172272517:web:7c6ab57fcc713ed1b676ec",
  measurementId: "G-8J1LV97ZXZ"
});

export const auth = app.auth();
export default app;
