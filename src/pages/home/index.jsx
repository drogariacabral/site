import { useEffect } from "react";
import { Container, ContainerThin, Section, SectionAlternative, HeroBackground, HeroButton, HeroTitle, HeroSubtitle, HeroText, HomeButton, ImgBackground, ImgTitle } from "./styles";
import heroImage from "../../assets/images/banner1.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import formasPag from "../../assets/images/formas-pag.svg";
import pix from "../../assets/images/formas-pagamento/pix.svg";
import cartao from "../../assets/images/formas-pagamento/cartao.svg";
import dinheiro from "../../assets/images/formas-pagamento/dinheiro.svg";
import medicina from "../../assets/images/medicina.svg";
import perfume from "../../assets/images/perfume.svg";
import conveniencia from "../../assets/images/chocolate.svg";
import higienePessoal from "../../assets/images/higiene-pessoal.svg";
import vitamina from "../../assets/images/vitamina-d.svg";
import suplemento from "../../assets/images/suplementos.svg";
import SiteHeader from "../../components/header";


function Home() {

    useEffect(() => {
        document.getElementById("hero-img").style.backgroundImage = `linear-gradient(to bottom, rgb(0, 48, 24, 0.7), rgb(0, 0, 0, 1)), url("${heroImage}")`;
         }, []);

    return(
        <>
            <HeroBackground id="hero-img">
                <div className="section-boxed flex-container w-60">
                    
                        <Container>
                            <HeroSubtitle><span className="mobile-hidden color-w">Drogaria Cabral </span>📍 Itapira - SP</HeroSubtitle>
                            <HeroTitle>Peça pelo Whatsapp</HeroTitle>
                            <HeroText className="mb-10">Na Drogaria Cabral, oferecemos uma ampla variedade de medicamentos, produtos de saúde e bem-estar, com atendimento personalizado e profissional.</HeroText>
                            <HeroText className="mb-30" style={{fontWeight: 800}}>Precisa de algo? Faça seu pedido online agora e receba em casa!</HeroText>      
                            <HeroButton>Fazer pedido</HeroButton>                 
                        </Container>
                       

                    </div>
            </HeroBackground>

            <Section>                
                <div className="section-boxed-thin flex-container">
                    <h2 className="mb-0 color-r">Nossos diferenciais</h2>
                    <div className="grid-container-3 w-65 gap-50">
                        <ContainerThin>
                            <FaWhatsapp size={"50px"} />
                            <h3>Compre pelo Whatsapp e <b>receba em casa</b></h3>
                        </ContainerThin>
                        <ContainerThin>
                            <MdOutlineSupportAgent size={"50px"} />
                            <h3>Atendimento atencioso e <b>humanizado</b></h3>
                        </ContainerThin>
                        <ContainerThin>
                            <AiOutlineDollar size={"50px"} />
                            <h3>Os <b>melhores preços</b> daqui da região</h3>
                        </ContainerThin>
                    </div>
                </div>
            </Section>

            <SectionAlternative>
                <div className="section-boxed flex-container">
                    <h2 className="color-w mb-0">Formas de pagamento</h2>
                    <img src={formasPag} style={{maxWidth: "100%"}}/>
                    <p className="color-w">Aceitamos PIX, Cartão de Crédito à vista ou parcelado*, Cartão de Débito ou Dinheiro.</p>
                    <HomeButton>Fazer pedido</HomeButton>
                </div>
            </SectionAlternative>
            <Section>
                <div className="section-boxed-thin grid-container-3 w-65">
                    <div className="flex-container gap-10">
                        <ImgBackground className="flex-container"><img style={{padding: "10px"}} src={medicina} width={100}/></ImgBackground>
                        <ImgTitle>Medicamentos</ImgTitle>
                    </div>
                    <div className="flex-container gap-10">
                        <ImgBackground className="flex-container"><img style={{padding: "10px"}} src={perfume} width={100}/></ImgBackground>
                        <ImgTitle>Perfumaria</ImgTitle>
                    </div>
                    <div className="flex-container gap-10">
                        <ImgBackground className="flex-container"><img style={{padding: "5px"}} src={conveniencia} width={100}/></ImgBackground>
                        <ImgTitle>Conveniência</ImgTitle>
                    </div>
                    <div className="flex-container gap-10">
                        <ImgBackground className="flex-container"><img style={{padding: "10px"}} src={higienePessoal} width={100}/></ImgBackground>
                        <ImgTitle>Higiene Pessoal</ImgTitle>
                    </div>
                    <div className="flex-container gap-10">
                        <ImgBackground className="flex-container"><img style={{padding: "10px"}} src={vitamina} width={100}/></ImgBackground>
                        <ImgTitle>Vitaminas</ImgTitle>
                    </div>
                    <div className="flex-container gap-10">
                        <ImgBackground className="flex-container"><img style={{padding: "10px"}} src={suplemento} width={100}/></ImgBackground>
                        <ImgTitle>Suplementos</ImgTitle>
                    </div>
                </div>
            </Section>
            <SectionAlternative>
                <div className="section-boxed flex-container w-65">
                    <h2 className="color-w mb-0">Nossa localização</h2>
                    <Container className="m-0">
                        <p className="color-w">Rua Antônio Alves de Campos, 265</p>
                        <p className="color-w">Penha do Rio do Peixe - Itapira</p>
                    </Container>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.235825136255!2d-46.8237130249269!3d-22.420148079600537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c901fca329596b%3A0xdd5c5cb009fd95ac!2sDrogaria%20Cabral%20%7C%20Farm%C3%A1cia%20Delivery%20em%20Itapira!5e0!3m2!1spt-BR!2sbr!4v1719944150545!5m2!1spt-BR!2sbr" width="100%" height="400" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
            </SectionAlternative>
            
        </>
    )
}

export default Home;