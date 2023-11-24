const firebaseConfig = {
    apiKey: "AIzaSyBc06aPkrLXUBgwawFlp1hOdzcPFMEDS3w",
    authDomain: "firestore-af51d.firebaseapp.com",
    projectId: "firestore-af51d",
    storageBucket: "firestore-af51d.appspot.com",
    messagingSenderId: "44313725070",
    appId: "1:44313725070:web:b3201e02df4558b6b421df",
    measurementId: "G-KMFBC2GZ20"
  };
  
    // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  
    // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const pessoaRef = dbRef.child('avaliacaoip');

var storage = firebase.storage();
  
