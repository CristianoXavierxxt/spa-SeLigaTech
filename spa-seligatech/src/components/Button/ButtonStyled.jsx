import styled from "styled-components";

export const ButtonSpace = styled.button`
    background-color: #66B2FF;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #ffffff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin: 0.2rem;
    
    &:hover {
        background-color: #BFFF00;
        color: #2c3e50;
        box-shadow: 0 0 35px #BFFF00;
    }
`;