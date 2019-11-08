import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyCcVLfMrKORcoSV36Gd07Ot6PgsgG5XMXo",
    authDomain: "bookers2-d2bf3.firebaseapp.com",
    databaseURL: "https://bookers2-d2bf3.firebaseio.com",
    projectId: "bookers2-d2bf3",
    storageBucket: "bookers2-d2bf3.appspot.com",
    messagingSenderId: "767306400428",
    appId: "1:767306400428:web:f0b7e90b7046ffaf615509"
};

firebase.initializeApp(firebaseConfig);

export default firebase