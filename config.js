import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDEEa7mSKoNapfYf5IxfddKI6FpUgLL4eE",
  authDomain: "pro-71-d3ebe.firebaseapp.com",
  projectId: "pro-71-d3ebe",
  storageBucket: "pro-71-d3ebe.appspot.com",
  messagingSenderId: "877501112405",
  appId: "1:877501112405:web:6d7d16c4a5aa1e7bdcf4dc"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()    