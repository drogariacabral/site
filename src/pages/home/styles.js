import styled from "styled-components";

export const Container = styled.div`
    margin: 30px 0;
    padding: 0;

    @media (max-width: 767px) {
        margin: 15px 0;
    }
`;

export const ContainerThin = styled.div`
    margin: 0;

    @media (max-width: 767px) {
        max-width: 220px;
    }
`;

export const Section = styled.div`
    background-color: ${(props) => props.theme.color.white};

    & iframe {
        border-radius: 15px;
        -webkit-box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.3);
        border: 4px solid ${(props) => props.theme.color.green.primary} !important;
    }
`;

export const SectionAlternative = styled.div`
    background-color: ${(props) => props.theme.color.red.primary};
`;

export const HeroBackground = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

    @media (max-width: 767px) {
        min-height: 70vh;
    }
`;

export const HeroTitle = styled.h2`
    color: ${(props) => props.theme.color.white};
    text-transform: uppercase;
    font-size: 45px;

    @media (max-width: 767px) {
        font-size: 36px;
    }
`;

export const HeroSubtitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    color: ${(props) => props.theme.color.white};
    margin-bottom: 0;
`;

export const HeroText = styled.p`
    color: ${(props) => props.theme.color.white};
`;

export const HeroButton = styled.a`
    background-color: ${(props) => props.theme.color.green.primary};
    color: ${(props) => props.theme.color.white};
    padding: 12px 50px;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700 !important;
    border-radius: 100px;

    -webkit-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, 0.4);
    -moz-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, 0.4);
    box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, 0.4);

    &:hover {
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color.red.primary};
    }

    @media (max-width: 767px) {
        padding: 10px 30px;
        font-size: 18px;
    }
`;

export const HomeButton = styled.a`
    background-color: ${(props) => props.theme.color.green.primary};
    color: ${(props) => props.theme.color.white};
    padding: 12px 50px;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700 !important;
    border-radius: 100px;

    -webkit-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, 0.4);
    -moz-box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, 0.4);
    box-shadow: 0px 0px 36px -10px rgba(240, 240, 240, 0.4);

    &:hover {
        color: ${(props) => props.theme.color.white};
        background-color: ${(props) => props.theme.color.green.secondary};
    }

    @media (max-width: 767px) {
        padding: 10px 30px;
        font-size: 18px;
    }
`;

export const ImgBackground = styled.div`
    padding: 25px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.green.primary};
`;

export const ImgTitle = styled.p`
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => props.theme.color.white};

    @media (max-width: 767px) {
        font-size: 18px;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    /* border: 2px solid ${(props) => props.theme.color.green.primary}; */
    padding: 20px 20px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 35px -15px rgba(0, 0, 0, 0.15);
`;

export const ProductName = styled.h3`
    color: ${(props) => props.theme.color.black};
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins";

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

export const ProductPrice = styled.p`
    color: ${(props) => props.theme.color.black};
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`;

export const BuyButton = styled.a`
    background-color: ${(props) => props.theme.color.green.primary};
    color: ${(props) => props.theme.color.white};
    padding: 8px 24px;
    border-radius: 15px;
    font-weight: 700;
    font-family: "Poppins";
    text-transform: uppercase;
    font-size: 16px;
`;
