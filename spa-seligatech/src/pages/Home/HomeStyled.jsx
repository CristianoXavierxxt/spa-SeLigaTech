import styled from "styled-components";

export const HomeBody = styled.section`
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    grid-gap: 1rem;
    margin: 0 auto;
    width: 90%;
`;

export const HomeHeader = styled.section`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 1rem auto;
    align-items: center;
`;