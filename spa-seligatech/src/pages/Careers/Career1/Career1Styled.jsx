import styled from "styled-components";

export const RoadmapHeader = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #ffffff;

`;

export const RoadmapContainer = styled.main`
    position: relative; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 50vh;
    color: #ffffff;
    font-size: 2rem;
    margin: 1rem auto;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.062), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.062) );
    border-radius: 2rem;

`;


export const ContainerIcon = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: 50%;
    position: relative;

    i{
        font-size: 2rem;
        box-sizing: border-box;
        color: ${({ isActive }) => (isActive ? "#66B2FF" : "#ffffff")};
        border-radius: 50%;
        padding: 1rem;
        background-color: #66B2FF;
        background: ${({ isActive }) => (isActive ? 
                "radial-gradient(#ffffff 55%, #007FFF 45%)" 
                    : 
                "radial-gradient(#66B2FF 55%, #ffffff 45%)"
            )
        };
        box-shadow: ${({ isActive }) => (isActive ? 
                "inset 0 0 0.5em #007FFF, 0 0 0.5em #007FFF" 
                    : 
                "#ffffff"
            )
        };

    }

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        margin: 0;
        padding: 0;
        width: 12rem;
        height: 5px;
        background: ${({ isActive }) => (isActive ? 
                "linear-gradient(to right, #007FFF, #007FFF, #ffffff, #ffffff)" 
                    : 
                "#ffffff"
            )
        };
        background-size: 300%;
        background-position: ${({ isActive }) => (isActive ? "left" : "right")};
        box-shadow: ${({ isActive }) => (isActive ? 
            "0 0 0.5em #007FFF, 0 0 0.5em #007FFF" 
                : 
            "#ffffff")};
        top: 55%;
        left: 95%;
        transform: translateY(-50%);
        transition: background 1.5s ease
    }
`;
