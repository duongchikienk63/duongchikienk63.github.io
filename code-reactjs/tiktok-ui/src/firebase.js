import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // apiKey: 'AIzaSyA8QCbYknsSqJDIyufwC9lQntjSJ80vY3Y',
    // authDomain: 'wewbea-2ca52.firebaseapp.com',
    // projectId: 'wewbea-2ca52',
    // storageBucket: 'wewbea-2ca52.appspot.com',
    // messagingSenderId: '492014238395',
    // appId: '1:492014238395:web:f4b2d0b7757fff76eb479e',
    // measurementId: 'G-70H5FZDHET',

    // apiKey: "AIzaSyB6nW0GwFr8iI6-QfWCBFwiVjbzXjOnx64",
    // authDomain: "dck28322.firebaseapp.com",
    // projectId: "dck28322",
    // storageBucket: "dck28322.appspot.com",
    // messagingSenderId: "286338876079",
    // appId: "1:286338876079:web:3ad7eebeec6a3e61354a5a",
    // measurementId: "G-7VN3YV055W"

    apiKey: "AIzaSyCFOhyDOhJkCsGQnKGP8Mndai2rrByg4JA",
    authDomain: "doan-585eda.firebaseapp.com",
    projectId: "doan-585eda",
    storageBucket: "doan-585eda.appspot.com",
    messagingSenderId: "110114991737",
    appId: "1:110114991737:web:39512b41b7b9924b0aeea8",
    measurementId: "G-F712H5JJQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
