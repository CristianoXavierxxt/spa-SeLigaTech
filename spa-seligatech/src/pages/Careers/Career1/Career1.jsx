import { RoadmapContainer, RoadmapHeader, ContainerIcon } from "./Career1Styled.jsx"
import React, { useState } from "react";

export default function Career1() {

    const [iconStates, setIconStates] = useState({
        rocket: false,
        check1: false,
        check2: false,
        check3: false,
        stars: false,
    });

    const handleClick = (iconName) => {
        setIconStates((prevStates) => ({
          ...prevStates,
          [iconName]: !prevStates[iconName],
        }));
      };

    return(
        <>
            <RoadmapHeader>
                <h1>
                    Back end roadmap
                </h1>
            </RoadmapHeader>

            <RoadmapContainer>

                
                
                
                    
                <ContainerIcon onClick={() => handleClick("rocket")} isActive={iconStates.rocket}>
                    <p>Vamos <br></br>começar</p>
                    <i className="bi bi-rocket-takeoff"></i>
                </ContainerIcon>
                
                
                <ContainerIcon onClick={() => handleClick("check1")} isActive={iconStates.check1}>
                    <p>Primeiro<br></br> passo</p>
                    <i className="bi bi-check-circle"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("check2")} isActive={iconStates.check2}>
                    <p>Segundo<br></br> passo</p>
                    <i className="bi bi-check-circle"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("check3")} isActive={iconStates.check3}>
                    <p>terceiro<br></br> passo</p>
                    <i className="bi bi-check-circle"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("stars")} isActive={iconStates.stars}>
                    <p>Boa<br></br>campeão</p>
                    <i className="bi bi-stars"></i>
                </ContainerIcon>

            </RoadmapContainer>
        </>
    )
}