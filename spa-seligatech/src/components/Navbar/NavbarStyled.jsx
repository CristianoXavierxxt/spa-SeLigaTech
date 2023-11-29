import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    background-color: #bdc3c7;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  
`;

export const ImagemLogo = styled.img`
    width: 8rem;
    height: 4.5rem;
    object-fit: cover;
    cursor: pointer;
`;

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    button {
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #006266;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            background-color: #00b894;
        }
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #7f8c8d;
        border: 2px solid #006266;
        width: 100%;
        border-radius: 0.3rem;

        &:focus{
            border: 2px solid #00b894;
            box-shadow: 0 0 35px #00b894;
        }

        &::placeholder {
            color: #2c3e50;
        }
    }
`;

export const ErrorSpan = styled.span`
    background-color: #fcb4b4;
    color: #9e0000;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    border-radius: 7px;
`;