// import firebase
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3l6j0XiQ98XOb68NFmNhEH_K63Pt0vRU",
  authDomain: "discord-clone-v2.firebaseapp.com",
  projectId: "discord-clone-v2",
  storageBucket: "discord-clone-v2.appspot.com",
  messagingSenderId: "435395259116",
  appId: "1:435395259116:web:53f0e21daf69a8775a93c9",
  measurementId: "G-CHCS5MTDV9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// create our firebase db
const db = firebaseApp.firestore();

// in our firebase project settings we enable sign in using google
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
