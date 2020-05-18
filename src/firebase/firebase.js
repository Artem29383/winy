import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/database';
import 'firebase/storage';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth();
export const firestoreRef = firebase.firestore();
export const functionsRef = firebase.functions();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const databaseRef = firebase.database();
