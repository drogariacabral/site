import { auth } from "./firebase_config";

const user = auth.currentUser;

if (user){
    console.log("Usuário logado")
} else {
    console.log("Usuário não identificado!")
}