import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 0.3rem;
    background-color: #fff;
    padding: 1rem;
    margin-top: 0.5rem;
`;

export const CardBody = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;


    h2{
        margin-bottom: 1rem;
    }

    img {
        width: 10%;
        object-fit: cover;
        object-position: center;
    }
`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.1rem;
    }
`