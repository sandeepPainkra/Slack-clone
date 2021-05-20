import firebase from "firebase";
const firebaseConfig = {
   apiKey: "AIzaSyBNIqjy4kWPflYEPloRkbB57TsGHGpFuQk",
   authDomain: "slack-20edf.firebaseapp.com",
   projectId: "slack-20edf",
   storageBucket: "slack-20edf.appspot.com",
   messagingSenderId: "724917014303",
   appId: "1:724917014303:web:b03dc35c2163fade436a2a",
   measurementId: "G-59MHBL377S",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
