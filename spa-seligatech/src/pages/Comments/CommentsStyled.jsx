import styled from "styled-components";

export const ContainerResult = styled.main`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const SearchPubli = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    width: 80%;
    align-items: center;  
`;

export const CreateComment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    pad: 1rem;
    width: 100%;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    textarea{
        outline: none;
        border: none;
        border-radius: 0.3rem;
        background-color: #222222;
        color: #ffffff;

        &::placeholder{
            color: #ffffff;
        }

        &:focus{
            border: #007FFF 0.175em solid;
        }

    }
`