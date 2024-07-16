import styled from "styled-components"

export const HeaderPrimary = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 12vh;
    position: sticky;
    background-color: ${props => props.theme.color.green.primary};

    @media (max-width: 767px){
        min-height: 12vh;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 250px;

    & a{
        font-weight: 500;
        font-family: "Montserrat"
    }

    & img{
        max-width: 150px;
        filter: drop-shadow(0 0 1rem white);
    }
`

export const EditButton = styled.button`
    background-color: ${props => props.theme.color.green.primary};
    color: ${props => props.theme.color.white};
    padding: 10px 20px;
    width: 100%;

    &:hover{
        background-color: ${props => props.theme.color.green.secondary};
    }
`

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
    color: ${props => props.theme.color.black};
    font-size: 18px;
    font-weight: 600;
    font-family: "Poppins";

    @media (max-width: 767px){
        font-size: 16px;
    }
`

export const ProductPrice = styled.p`
    color: ${props => props.theme.color.black};
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 767px){
        font-size: 16px;
    }
`