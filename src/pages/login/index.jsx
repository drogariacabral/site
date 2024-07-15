
import { login } from "../../hooks/auth";
import DOMPurify from "dompurify";
import { FormContainer, FormInput, FormButton } from "./styles";

function LogIn(){

    async function handlerLogin(event){
        event.preventDefault()
        const form = event.target
        const emailInput = DOMPurify.sanitize(form.elements.namedItem("email").value)
        const passlInput = DOMPurify.sanitize(form.elements.namedItem("password").value)

        login(emailInput, passlInput)
           
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