import styled from "styled-components";

export const PrimaryButton = styled.button `
    font-size: 18px;
    letter-spacing: 1px;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.green.primary};
    padding: 8px 30px;
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 166, 81, 1);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 166, 81, 1);
    box-shadow: 0px 0px 20px -10px rgba(0, 166, 81, 1);


    @media (max-width: 767px){
        display: none;
        /* font-size: 16px;
        padding: 8px 40px;
        margin-top: 10px; */
    }
`