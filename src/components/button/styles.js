import styled from "styled-components";

export const PrimaryButton = styled.a`
    font-size: 18px;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.green.primary};
    padding: 10px 30px;
    -webkit-box-shadow: 0px 0px 20px -10px rgba(0, 166, 81, 1);
    -moz-box-shadow: 0px 0px 20px -10px rgba(0, 166, 81, 1);
    box-shadow: 0px 0px 20px -10px rgba(0, 166, 81, 1);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700 !important;
    border-radius: 100px;

    @media (max-width: 767px) {
        display: none;
    }
`;
