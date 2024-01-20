import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '~/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    // sendSignInLinkToEmail,
} from 'firebase/auth';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    function setUpRecaptcha(number) {
        window.recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {
                size: 'invisible',
            },
            auth,
        );
        window.recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, window.recaptchaVerifier);
    }

    // function emailLink(email) {
    //     sendSignInLinkToEmail(auth, email, actionCodeSettings)
    //         .then(() => {
    //             // The link was successfully sent. Inform the user.
    //             // Save the email locally so you don't need to ask the user for it again
    //             // if they open the link on the same device.
    //             window.localStorage.setItem('emailForSignIn', email);
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // ...
    //         });
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log('Auth', currentuser.auth);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{
                user,
                logIn,
                signUp,
                logOut,
                googleSignIn,
                setUpRecaptcha,
                // emailLink,
            }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
