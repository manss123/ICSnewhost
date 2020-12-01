import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBY-VDvzqccNSsMAtJX3AwJMSDIYiVy5uU",
    authDomain: "d3-firebase-69771.firebaseapp.com",
    databaseURL: "https://d3-firebase-69771.firebaseio.com",
    projectId: "d3-firebase-69771",
    storageBucket: "d3-firebase-69771.appspot.com",
    messagingSenderId: "1032793104871"
  };
 const firebaseApp = firebase.initializeApp(config);

 export default firebaseApp.firestore()