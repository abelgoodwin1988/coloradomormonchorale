import firebase from 'firebase/app'; // main firebase component
import 'firebase/firestore';
import 'firebase/auth';
import config from './firebaseConfig';

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
});

export const performancesRef = db.collection('performances');
export const authRef = firebase.auth();
