import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user

        const {displayName, email, photoURL, uid} = user

        return {
            ok: true,

            //User info
            displayName, email, photoURL, uid
        }

        // console.log(user)
        // console.log(credentials)

    } catch (error) {

        const errorMessage = error.message;

        console.log(error)
        return {
            ok: false,
            errorMessage,
        }

    }
}

export const registerUserWithEmailAndPassword = async({email, password, displayName}) => { //Esperar los objetos con esas propiedades (data del usuario)
    try {

        console.log({email,password,displayName})

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName});

        
        return {
            ok: true,
            uid, photoURL, displayName, email
        };
        
    } catch (error) {
        // console.log(error)
        return {
            ok: false,
            errorMessage: 'Este correo ya está siendo utilizado',
        }
    }
}

export const loginWithEmailAndPassword = async({email, password}) => {

    try {
        console.log({email, password})
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL, displayName} = resp.user;
        
        return {
            ok: true,
            email, password, uid, displayName, photoURL
        }
        
    } catch (error) {
        return {
            ok: false,
            errorMessage: 'Error en la autenticación',
        }
    }

}

export const logoutFirebase = async() => {

    return await FirebaseAuth.signOut();

}