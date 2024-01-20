import { db } from '~/firebase';

import {
    collection,
    getDocs,
    // getDoc,
    // addDoc,
    // updateDoc,
    // deleteDoc,
    // doc,
} from 'firebase/firestore';

const categoryCollectionRef = collection(db, 'category');

class CategoryDataService {
    getAllCategory = () => {
        return getDocs(categoryCollectionRef);
    };
}

export default new CategoryDataService();
