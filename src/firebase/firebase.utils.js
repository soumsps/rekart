import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyApJT7ddzXuRdyZP0UStYLg8VYCI9N81SI',
  authDomain: 'rekart-db.firebaseapp.com',
  databaseURL: 'https://rekart-db.firebaseio.com',
  projectId: 'rekart-db',
  storageBucket: 'rekart-db.appspot.com',
  messagingSenderId: '241419238571',
  appId: '1:241419238571:web:153f026a8b6487c6484bee',
  measurementId: 'G-S1PNW7DTJB'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
