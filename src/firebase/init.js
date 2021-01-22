 import firebase from "firebase/app";
 import firestore from "firebase/firestore";


  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()