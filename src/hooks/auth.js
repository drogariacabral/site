import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase_config";

export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            window.location.assign("/admin")
        })
        .catch((err) => {
            alert(err)
        })
}

export async function logOut() {
    return signOut(auth)
}

export function verifyLogin(setUserLogged, fetchProducts) {
    return onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserLogged(user.uid)
            if (fetchProducts) {
                fetchProducts()
            }
        } else {
            setUserLogged("")
        }
    });
}
