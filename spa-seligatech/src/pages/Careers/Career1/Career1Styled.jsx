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
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50vh;
    color: #ffffff;
    font-size: 2rem;
    margin: 1rem auto;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.062), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.062) );
    border-radius: 2rem;

    i{
        border-radius: 50%;
        padding: 0.5rem;
        background-color: #66B2FF;
    }

`;


export const ContainerIcon = styled.div`
    display: flex;
    padding: 0.4rem;
    border-radius: 50%;
    background: ${({ isActive }) => (isActive ? 
            "linear-gradient(to right, #007FFF, #007FFF, #ffffff, #ffffff)" 
                : 
            "#ffffff"
        )
    };
    background-size: 300%;
    background-position: ${({ isActive }) => (isActive ? "left" : "right")};
    box-shadow: ${({ isActive }) => (isActive ? 
            "inset 0 0 0.5em #007FFF, 0 0 0.5em #007FFF" 
                : 
            "#ffffff")};
    position: relative;
    transition: background 0.6s ease;

    &:not(:last-child)::after {
        content: "";
        position: absolute;
        width: 14.7rem;
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
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        transition: background 2s ease
    }
`;