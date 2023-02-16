import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9SBAbhhwsgGY1WqkUvcWmZDxKDFxSvlg",
    authDomain: "messenger-clone-dc049.firebaseapp.com",
    projectId: "messenger-clone-dc049",
    storageBucket: "messenger-clone-dc049.appspot.com",
    messagingSenderId: "418493560075",
    appId: "1:418493560075:web:517b7bd617a3d9d7c35e0e",
    measurementId: "G-TG6Y6EXP1Y"
});

const db = firebaseApp.firestore();

export default db;