import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    border-radius: 1rem;
    background-color: #66B2FF;
    margin-top: 0.5rem;
    color: #ffffff;
    transition: all 0.2s ease-in-out;

    &:hover{
        box-shadow: #BFFF00 0px 0px 0px 2px, #BFFF00 0px 4px 6px -1px, #BFFF00 0px 1px 0px inset;
    }
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

`;

export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 2rem;
    border-bottom: solid 1px;
    margin: 1rem 1rem  0rem 0rem;

    section{
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-bottom: 0.5rem;
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

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    border-left: solid 1px;

    img {
            height: 60%;
            width: 70%;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
        }
`;

export const CommentResult = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    width: 80%;
`;