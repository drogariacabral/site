import styled from "styled-components";

export const DeleteButton = styled.button`
    background-color: ${props => props.theme.color.red.primary};
    color: ${props => props.theme.color.white};
    padding: 10px 20px;

    &:hover{
        background-color: ${props => props.theme.color.red.secondary};
    }
`
export const EditButton = styled.button`
    background-color: ${props => props.theme.color.green.primary};
    color: ${props => props.theme.color.white};
    padding: 10px 20px;

    &:hover{
        background-color: ${props => props.theme.color.green.secondary};
    }
`