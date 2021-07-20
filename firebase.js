import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAKNqbrgs3KW3u6uIxC-1NLSEx9e_D6_qo',
  authDomain: 'docs-ddda0.firebaseapp.com',
  projectId: 'docs-ddda0',
  storageBucket: 'docs-ddda0.appspot.com',
  messagingSenderId: '246461517519',
  appId: '1:246461517519:web:8995530656b599af38b1ba',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
