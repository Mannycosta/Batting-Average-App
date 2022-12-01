// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCf3nJTsTlCxjyd3V6svf_pLuQ7O51fmDE',
  authDomain: 'stat-ninja.firebaseapp.com',
  projectId: 'stat-ninja',
  storageBucket: 'stat-ninja.appspot.com',
  messagingSenderId: '991053084992',
  appId: '1:991053084992:web:58d6f1a14799c59b2562a5',
};

// Initialize Firebase
const statNinja = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(statNinja);
