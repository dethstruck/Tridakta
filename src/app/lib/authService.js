import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './firebaseConfig';
import { db } from './firebaseConfig';
import { ref, set } from "firebase/database";

export const signUp = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
        displayName: name,
    });

    await set(ref(db, 'users/' + user.uid), {
        name,
        email,
        createdAt: new Date().toISOString()
    })

    return user
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);

}