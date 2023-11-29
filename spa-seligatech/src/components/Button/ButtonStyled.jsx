import styled from "styled-components";

export const ButtonSpace = styled.button`
    background-color: #006266;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #bdc3c7;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    
    &:hover {
        background-color: #00b894;
        color: #2c3e50;
        box-shadow: 0 0 35px #00b894;
    }
`;