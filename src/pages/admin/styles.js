import styled from "styled-components"

export const HeaderPrimary = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 12vh;
    position: sticky;
    background-color: ${props => props.theme.color.green.primary};

    /* -webkit-box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3);
    -moz-box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3);
    box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3); */

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

export const DeleteButton = styled.button`
    background-color: ${props => props.theme.color.red.primary};
    color: ${props => props.theme.color.white};
    padding: 10px 20px;
    width: 100%;

    &:hover{
        background-color: ${props => props.theme.color.red.secondary};
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