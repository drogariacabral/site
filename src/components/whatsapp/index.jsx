import { WhatsDiv } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton(){
    return(
        <>
            <WhatsDiv href="https://api.whatsapp.com/send/?phone=5519996925463">
                <FaWhatsapp style={{marginBottom: "-5px", fill: "#fff"}} size={"30px"} />
            </WhatsDiv>
        </>
    )
}

export default WhatsAppButton;