import { db } from '~/firebase';

import {
    // collection,
    // getDocs,
    getDoc,
    doc,
} from 'firebase/firestore';

// const UserCollectionRef = collection(db, 'user');

class UserDataService {
    // getAllProducts = () => {
    //     return getDocs(productCollectionRef);
    // };
    
      getUser = (id) => {
        const UserDoc = doc(db, "user", id);
        return getDoc(UserDoc);
      };
}

export default new UserDataService();

