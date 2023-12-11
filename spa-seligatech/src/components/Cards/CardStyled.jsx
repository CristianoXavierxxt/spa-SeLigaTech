import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.062), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.062) );
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin-top: 0.5rem;
    color: #ffffff;
    
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

        div{
            width: 50%;
            flex-direction: row;

            p{
                cursor: pointer;
                &:hover{
                    color: #66B2FF;
                    text-decoration: underline;
                    text-shadow: 0 0 0.20em #fff7, 0 0 0.30em #007FFF;
                }
            }
        }
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
    width: 50%;
    border-left: solid 1px;

    img {
            height: 50%;
            width: 60%;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
        }
`;

