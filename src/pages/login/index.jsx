
import { login } from "../../services/auth_config";
import DOMPurify from "dompurify";
import { FormContainer, FormInput, FormButton } from "./styles";
import { onAuthStateChanged } from "firebase/auth/web-extension";
import { auth } from "../../services/firebase_config";

function LogIn(){

    async function handlerLogin(event){
        event.preventDefault()
        const form = event.target
        const emailInput = DOMPurify.sanitize(form.elements.namedItem("email").value)
        const passlInput = DOMPurify.sanitize(form.elements.namedItem("password").value)

        login(emailInput, passlInput)
            .then((result) => {
                
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      // User is signed in, see docs for a list of available properties
                      // https://firebase.google.com/docs/reference/js/auth.user
                      const uid = user.uid;
                      sessionStorage.setItem("@AuthFirebase:user", uid)
                      // ...
                    } else {
                      // User is signed out
                      // ...
                    }
                  });       
                window.location.assign("/admin")
                
            })
            .catch((err) => {
                alert(err)
            })
    }

    return(
        <div className="section-boxed-thin w-100 flex-container">
            <FormContainer onSubmit={handlerLogin}>
                <h2 className="color-g">Fazer Login</h2>
                <FormInput type="text" id="email" placeholder="E-Mail" />
                <FormInput type="password" id="password" placeholder="Senha"/>
                <FormButton type="submit">Acessar</FormButton>
            </FormContainer>
        </div>
    )

}

export default LogIn;