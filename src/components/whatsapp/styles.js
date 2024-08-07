import styled from "styled-components";

export const WhatsDiv = styled.a`
    padding: 15px;
    background-color: ${props => props.theme.color.green.primary};
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 400px;

    &:hover{
        background-color: ${props => props.theme.color.green.secondary};
    }
`