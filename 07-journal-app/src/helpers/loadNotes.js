import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadNotes = async(uid = '') => {
    if(!uid) throw new Error('El UID del usuario no existe')

    //path en firebase donde se encuentran los journals
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef) //query

    const notes = []
    docs.forEach(doc => {
        notes.push({id: doc.id, ...doc.data()})
    })

    return notes;
}