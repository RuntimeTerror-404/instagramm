import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAa9JV3rbBBW92Sqkahxr6IftY5tjm_gnE",
  authDomain: "instagramm-clone-react.firebaseapp.com",
  projectId: "instagramm-clone-react",
  storageBucket: "instagramm-clone-react.appspot.com",
  messagingSenderId: "13023481268",
  appId: "1:13023481268:web:8aab0d898be6982ec8b6e1",
  measurementId: "G-G3R7CB4GGF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
