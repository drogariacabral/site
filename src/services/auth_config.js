import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase_config";

export async function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}

export async function logOut(){
    return signOut(auth)
}

export function onAuthChanged(){
    return onAuthStateChanged(auth, (data) =>{
        data
    })
}