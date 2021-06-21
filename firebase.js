import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDbMFmTK1mNJ8cgpMxhTOA7fib1ckV7DPk",
    authDomain: "facebook-clone-2ef30.firebaseapp.com",
    databaseURL: "https://facebook-clone-2ef30-default-rtdb.firebaseio.com",
    projectId: "facebook-clone-2ef30",
    storageBucket: "facebook-clone-2ef30.appspot.com",
    messagingSenderId: "1081883953595",
    appId: "1:1081883953595:web:84a34e03ed3a583f865c9e",
    measurementId: "G-17HVDWJ7EJ"
  };

  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =  firebase.auth();

  const provider =  new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
