import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth();
export const firestoreRef = firebase.firestore();
