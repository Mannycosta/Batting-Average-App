import {firebaseConfig} from './firebase-config';
import {doc, setDoc} from 'firebase/firestore';
import {firebaseDB} from './firebase-config';

export const handleSubmit = async (req: Request, res: Response) => {
  // Add a new document in collection "cities"
  await setDoc(doc(firebaseDB, 'teams', 'LA'), {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
  });
};
