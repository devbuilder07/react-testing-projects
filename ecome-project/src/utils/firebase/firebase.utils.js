import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDLOdlbBgQrUz_I10IKi9BwKUShgUid96M",
    authDomain: "react-ecome.firebaseapp.com",
    projectId: "react-ecome",
    storageBucket: "react-ecome.appspot.com",
    messagingSenderId: "79442914519",
    appId: "1:79442914519:web:76190d02cccd4e0927d492"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Creating database
export const db = getFirestore();

export const cteateUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (err) {
            console.error('Error creating the user', err.message);
        }
    }
    return userDocRef;
}