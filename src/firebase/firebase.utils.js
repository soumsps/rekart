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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!userRef.exists) {
    // this means user is new and does not exist in our firestore database
    // so we gonna add it.
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
