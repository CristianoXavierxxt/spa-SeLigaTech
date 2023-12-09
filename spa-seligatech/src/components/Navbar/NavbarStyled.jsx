import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    background-color: #007FFF;
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
        background-color: #66B2FF;
        color: #ffffff;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            background-color: #BFFF00;
            color: #2c3e50;
        }
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #E0E0E0;
        border: 2px solid #66B2FF;
        width: 100%;
        border-radius: 0.3rem;
        color: #2c3e50;

        &:focus{
            border: 2px solid #BFFF00;
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

export const UserLoggedSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 1rem;

    h2{
        font-size: 1.1rem;
        color: #FFFFFF;
        transition: all 0.3s;
        cursor: pointer;
    }

    h2:hover{
        color: #BFFF00;
    }

    i{
        font-size: 1.5rem;
        color: #FFFFFF;
        cursor: pointer;
    }

    i:hover{
        color: #BFFF00;
    }
`;

export const NavButtons = styled.div`
    display: flex;
    flex-direction: row;
`