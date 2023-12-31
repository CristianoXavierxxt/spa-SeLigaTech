import styled from "styled-components";

export const ContainerResults = styled.section`
    padding-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 50%;
    }
`;

export const SearchPubli = styled.div`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    grid-gap: 1rem;
    margin: 0 auto; 
`;

export const TextResult = styled.div`
    padding: 4rem;
    background-color: #fff;
    width: 70.6%;
    border-radius: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    span {
        font-size: 1rem;
    }
`;