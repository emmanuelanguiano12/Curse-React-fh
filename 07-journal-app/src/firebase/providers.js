import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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