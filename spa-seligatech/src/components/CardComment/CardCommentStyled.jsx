import styled from "styled-components";

export const CommentContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 80%;
    box-shadow: inset #66B2FF 0px 0px 0px 2px, #66B2FF 0px 1px 0px;
    border-radius: 1rem;
    background-color: rgba(68, 68, 68, 0.5);
    padding: 0.5rem;
    color: #ffffff;
    transition: all 0.2s ease-in-out;

    &:hover{
        box-shadow: inset 0 0 0.5em #007FFF, 0 0 0.5em #007FFF;
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