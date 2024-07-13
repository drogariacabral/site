import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    padding: 20px 20px;
`

export const FormInput = styled.input`
    width: 100%;
    border-radius: 20px;
    padding: 10px 20px;
    border: 2px solid ${props => props.theme.color.green.primary};
`

export const FormButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.color.green.primary};
    padding: 10px 20px;
    color: ${props => props.theme.color.white};
`