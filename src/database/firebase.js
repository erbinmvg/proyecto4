import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




 initializeApp({
    apiKey: "AIzaSyBHbxwxw-EGG3MIlErhFaZpkH_o9sCeC1U",
    authDomain: "rest-proyec4.firebaseapp.com",
    projectId: "rest-proyec4",
    storageBucket: "rest-proyec4.appspot.com",
    messagingSenderId: "1004007031156",
    appId: "1:1004007031156:web:fdca07b3ddd2a4e2ccac21"
  });

  export const db = getFirestore();