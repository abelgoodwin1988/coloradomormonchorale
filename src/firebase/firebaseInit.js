import firebase from 'firebase/app'; // main firebase component
import 'firebase/firestore';
import 'firebase/auth';
import config from './firebaseConfig';

firebase.initializeApp(config);

export const firestoreRef = firebase.firestore();
export const authRef = firebase.auth();
