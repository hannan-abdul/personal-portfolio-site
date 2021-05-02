import firebase from "firebase"

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAm1g35JSldTPiYbjDYOVWty5G4yMwH_4s",
        authDomain: "abdul-hannan-site.firebaseapp.com",
        projectId: "abdul-hannan-site",
        storageBucket: "abdul-hannan-site.appspot.com",
        messagingSenderId: "395967583485",
        appId: "1:395967583485:web:3305f17e8e9b626db1da94"
});

var db = firebaseApp.firestore();

export {db};

