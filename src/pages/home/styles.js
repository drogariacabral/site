import styled from "styled-components";

export const Container = styled.div `
    margin: 30px 0;
    padding: 0;

    @media (max-width: 767px){
        margin: 15px 0;
    }
`

export const ContainerThin = styled.div`
    margin: 0;
`

export const Section = styled.div`
    background-color: ${props => props.theme.color.white};
`

export const SectionAlternative = styled.div`
    background-color: ${props => props.theme.color.red.primary};
`

export const HeroBackground = styled.div `
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    

    @media (max-width: 767px) {
        min-height: 70vh;   
    }

`

export const HeroTitle = styled.h2 `
    color: ${props => props.theme.color.white};
    text-transform: uppercase;
    font-size: 45px;

    @media(max-width: 767px){
        font-size: 36px;
    }
`

export const HeroSubtitle = styled.h3 `
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    color: ${props => props.theme.color.white};
    margin-bottom: 0;
`

export const HeroText = styled.p `
    color: ${props => props.theme.color.white};
`

export const HeroButton = styled.button`
    background-color: ${props => props.theme.color.green.primary};
    color: ${props => props.theme.color.white};
    padding: 12px 50px;
    font-size: 20px;

    -webkit-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);
    -moz-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);
    box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);

    &:hover{
        color: ${props => props.theme.color.white};
        background-color: ${props => props.theme.color.red.primary};
    }

    @media (max-width: 767px) {
        padding: 10px 30px;
        font-size: 18px;
    }
`

export const HomeButton = styled.button`
    background-color: ${props => props.theme.color.green.primary};
    color: ${props => props.theme.color.white};
    padding: 12px 50px;
    font-size: 20px;

    -webkit-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);
    -moz-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);
    box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, .4);

    &:hover{
        color: ${props => props.theme.color.white};
        background-color: ${props => props.theme.color.green.secondary};
    }

    @media (max-width: 767px) {
        padding: 10px 30px;
        font-size: 18px;
    }

`

export const ImgBackground = styled.div`
    padding: 25px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.green.primary};
`

export const ImgTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: ${props => props.theme.color.text};
`