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
                    <i className="bi bi-rocket-takeoff"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("check1")} isActive={iconStates.check1}>
                    <i className="bi bi-check-circle"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("check2")} isActive={iconStates.check2}>
                    <i className="bi bi-check-circle"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("check3")} isActive={iconStates.check3}>
                    <i className="bi bi-check-circle"></i>
                </ContainerIcon>

                <ContainerIcon onClick={() => handleClick("stars")} isActive={iconStates.stars}>
                    <i className="bi bi-stars"></i>
                </ContainerIcon>

            </RoadmapContainer>
        </>
    )
}