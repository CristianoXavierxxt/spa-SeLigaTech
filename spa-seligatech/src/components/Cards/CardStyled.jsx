import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    border-radius: 0.3rem;
    background-color: #7f8c8d;
    margin-top: 0.5rem;
    color: #2c3e50;
`;

export const CardBody = styled.article`
    display: flex;
    height: 100%;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }

    h2{
        margin-bottom: 1rem;
    }

    img {
        width: 15%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    section{
        display: flex;
        align-items: center;
        gap: 0.1rem;
    }
`;

export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    font-size: ${(props) => (props.top ? "1.5rem" : "1rem") };

    h2{
        margin-bottom: 1rem;
        font-size: ${(props) => (props.top ? "3rem" : "1.5rem") };
    }
`;