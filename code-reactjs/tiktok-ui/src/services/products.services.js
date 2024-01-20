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

const productCollectionRef = collection(db, 'products');

class ProductDataService {
    getAllProducts = () => {
        return getDocs(productCollectionRef);
    };

    addProducts = (newProduct) => {
        return addDoc(productCollectionRef, newProduct);
      };
    
      updateProduct = (id, updatedProduct) => {
        const productDoc = doc(db, "products", id);
        return updateDoc(productDoc, updatedProduct);
      };
    
      deleteProduct = (id) => {
        const productDoc = doc(db, "products", id);
        return deleteDoc(productDoc);
      };
    
      getProduct = (id) => {
        const productDoc = doc(db, "products", id);
        return getDoc(productDoc);
      };
}

export default new ProductDataService();
