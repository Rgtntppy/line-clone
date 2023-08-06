import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1DfcD7-Ititp4a-R5BIQESe4SWBo6JJE",
    authDomain: "line-clone-fb5c0.firebaseapp.com",
    projectId: "line-clone-fb5c0",
    storageBucket: "line-clone-fb5c0.appspot.com",
    messagingSenderId: "785780441772",
    appId: "1:785780441772:web:4942cbbac81e8b3c9fd509"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };