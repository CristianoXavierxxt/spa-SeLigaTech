import styled from "styled-components";

export const CareerBody = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 1rem auto;
    width: 90%;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;