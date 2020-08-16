import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsRYmBMG3kapMY-Bp3_gDOrauaDUhi5vw",
  authDomain: "re-vents-f8480.firebaseapp.com",
  databaseURL: "https://re-vents-f8480.firebaseio.com",
  projectId: "re-vents-f8480",
  storageBucket: "re-vents-f8480.appspot.com",
  messagingSenderId: "838609305242",
  appId: "1:838609305242:web:8a53ad56d75f458cd52923",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
