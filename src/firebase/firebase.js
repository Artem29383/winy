import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCErJJduKqG1ZyYqFmNKdBIfPsNFhp42sY',
  authDomain: 'mini-twitter-ced4f.firebaseapp.com',
  databaseURL: 'https://mini-twitter-ced4f.firebaseio.com',
  projectId: 'mini-twitter-ced4f',
  storageBucket: 'mini-twitter-ced4f.appspot.com',
  messagingSenderId: '652955228797',
  appId: '1:652955228797:web:7d13e50cc06249ca47af14',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
