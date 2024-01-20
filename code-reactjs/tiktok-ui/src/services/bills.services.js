import { db } from '~/firebase';

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';

const billCollectionRef = collection(db, 'bills');

class BillDataService {
    getAllBills = () => {
        return getDocs(billCollectionRef);
    };

    addBill = (newBill) => {
        return addDoc(billCollectionRef, newBill);
    };

    // updateProduct = (id, updatedProduct) => {
    //     const productDoc = doc(db, 'products', id);
    //     return updateDoc(productDoc, billCollectionRef);
    // };

    deleteBill = (id) => {
        const BillDoc = doc(db, 'bills', id);
        return deleteDoc(BillDoc);
    };

    // getBill = (id) => {
    //     const BillDoc = doc(db, 'cart', id);
    //     return getDoc(productDoc);
    // };
}

export default new BillDataService();
