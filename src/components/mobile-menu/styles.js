import styled from "styled-components";

export const MobileMenuContainer = styled.div`

    @media (min-width: 767px) {
        display: none;
    }
`

export const MenuButton = styled.button`
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.green.primary};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
`

export const MenuContent = styled.div`
    background-color: ${props => props.theme.color.green.primary};
    padding: 20px 0px;
    position: absolute;
    top: 88px;
    right: 0;
    width: 50%;
    height: 100vh;
    box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 5px 5px;
    overflow: hidden;

    & ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    & li{
        
    }

    & a{
        display: block;
        padding: 15px;
        text-decoration: none;
    }

    & button{
        margin-top: 10px;
    }
`