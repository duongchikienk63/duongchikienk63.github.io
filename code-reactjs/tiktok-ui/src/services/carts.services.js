import { db } from '~/firebase';

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    // setDoc,
} from 'firebase/firestore';

class CartDataService {
    addCarts = (newCart, idUser) => {
        return addDoc(collection(db, idUser), newCart);
    };

    // addUserCarts = (newCart, email, idItem) => {
    //     return setDoc(collection(db, 'carts', email), {
    //         idItem: newCart,
    //     });
    // };

    // setUserCarts = (email, data) => {
    //     return setDoc(doc(db, 'carts', email), data);
    // };

    updateCart = (id, updateCart, idUser) => {
        const CartDoc = doc(db, idUser, id);
        return updateDoc(CartDoc, updateCart);
    };

    deleteCart = (id, idUser) => {
        const CartDoc = doc(db, idUser, id);
        return deleteDoc(CartDoc);
    };

    getAllCarts = (idUser) => {
        return getDocs(collection(db, idUser));
    };
}

export default new CartDataService();
