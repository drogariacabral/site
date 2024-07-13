import styled from "styled-components"

export const HeaderPrimary = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 12vh;
    position: sticky;
    /* background-color: ${props => props.theme.color.green.primary}; */

    /* -webkit-box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3);
    -moz-box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3);
    box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3); */

    @media (max-width: 767px){
        min-height: 12vh;
    }
`

export const HeaderAdmin = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 12vh;
    position: sticky;
    background-color: ${props => props.theme.color.green.primary};
    color: ${props => props.theme.color.white};

    /* -webkit-box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3);
    -moz-box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3);
    box-shadow: 0px 10px 24px -10px rgba(0, 166, 81,0.3); */

    & img{
        filter: drop-shadow(0px 0px 10px #f0f0f0);
    }


    & a{
        font-size: 18px;
        font-weight: 600 !important;
        color: ${props => props.theme.color.white};
    }

    & button{
        padding: 10px 20px;
    }

    @media (max-width: 767px){
        min-height: 12vh;
    }
`

export const Container = styled.div`
    display: flex;
    gap: 40px;

    & a{
        font-weight: 500;
        font-family: "Montserrat";
        text-decoration: none;
    }

    & img{
        max-width: 150px;
    }

    @media (max-width: 767px){
        & img{
            max-width: 130px;
        }
    }
`