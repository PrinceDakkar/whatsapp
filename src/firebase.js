import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyApjnJMYt6aUX8TgvPGnz5VUpEuY0QoS-c",
    authDomain: "whatsapp-42b29.firebaseapp.com",
    databaseURL: "https://whatsapp-42b29.firebaseio.com",
    projectId: "whatsapp-42b29",
    storageBucket: "whatsapp-42b29.appspot.com",
    messagingSenderId: "227504154729",
    appId: "1:227504154729:web:1f0320885a6e59fe335af8",
    measurementId: "G-MRSG9KVQ12"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;