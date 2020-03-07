const admin = require('firebase-admin');
const config = require('./config');

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialapp-a6f79.firebaseio.com",
    storageBucket: "socialapp-a6f79.appspot.com"
});


const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

module.exports = { admin, db, firebase }; 