import styled from "styled-components";


export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 0 auto;

    form{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    border-radius: 0.3rem;
    margin: 0.05rem;
    background: 
        ${ (props) => 
            (
                props.type === "signin" ? 
                "transparent" 
                    : 
                "linear-gradient(180deg, rgba(0, 71, 141, 0.9), rgba(0, 31, 63, 0.9), rgba(0, 31, 63, 0.9), rgba(0, 71, 141, 0.9));" 
            ) 
        };
    color: ${ (props) => (props.type === "signup" ? "blue" : "white" ) };
    border: ${ (props) => (props.type === "signup"? "none" : "rgba(0, 71, 141, 0.9) 0.125em solid;" ) };
    

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }

    form{
        align-items: center;
    }

    button {
        width: 40%;
    }
`;