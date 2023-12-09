import styled from "styled-components";

export const CommentContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    border-radius: 1rem;
    background-color: #66B2FF;
    padding: 0.5rem;
    color: #ffffff;
    transition: all 0.2s ease-in-out;

    &:hover{
        box-shadow: #BFFF00 0px 0px 0px 2px, #BFFF00 0px 4px 6px -1px, #BFFF00 0px 1px 0px inset;
    }
`;

export const CommentBody = styled.section`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    i{
        font-size: 2rem;
    }
`;