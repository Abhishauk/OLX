import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOcvbzj__0JKkh2GiM4QSTcCqwb5TtaGo",
    authDomain: "olx-clone-3b95b.firebaseapp.com",
    projectId: "olx-clone-3b95b",
    storageBucket: "olx-clone-3b95b.appspot.com",
    messagingSenderId: "386597655439",
    appId: "1:386597655439:web:7eea9e680f6f74e537b1fa",
    measurementId: "G-YCE6B8B4TC"
  };

  export default firebase.initializeApp(firebaseConfig)