import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /*position: fixed;
    top: 0;*/
    background-color: #f8f8f8;
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

    i {
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #bdc3c7;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #bdc3c7;
        border: none;
        width: 100%;
        border-radius: 0.3rem;

        &:focus{
            border: 2px solid #006266;
        }
    }
`;

export const Button = styled.button`
    background-color: #00b894;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    
    &:hover {
        background-color: #006266
    }
`;