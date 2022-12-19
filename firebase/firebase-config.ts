// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  collection,
  DocumentData,
  Firestore,
  getDocs,
  getFirestore,
} from 'firebase/firestore/lite';
import {Team} from '../types/Team';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
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

export const loadTeams = async (db: Firestore, setTeams: Function) => {
  const teamCollection = collection(db, 'teams');
  const teamSnapshot = await getDocs(teamCollection);
  const teamsList = teamSnapshot.docs.map(doc => {
    return {...doc.data(), id: doc.id};
  });
  if (teamsList.length > 0) {
    const teams: Team[] | DocumentData = [];
    teamsList.map(team => {
      teams.push(team);
    });
    setTeams(teams);
  }
};
