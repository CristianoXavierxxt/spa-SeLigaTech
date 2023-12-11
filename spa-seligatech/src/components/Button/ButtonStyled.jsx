import styled from "styled-components";

export const ButtonSpace = styled.button`

  * {
    box-sizing: border-box;
  }

  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: transparent;
  position: relative;
  color: #66B2FF;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border: #007FFF 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  box-shadow: inset 0 0 0.5em #007FFF, 0 0 0.5em #007FFF;

  &::before {
    content: "";
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #007FFF;
    transform: perspective(0.3em) rotateX(10deg) scale(1, 0.30);
    filter: blur(0.5em);
    opacity: 0.6;
    pointer-events: none;
    transition: opacity 100ms linear;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #007FFF;
    box-shadow: 0 0 0.2em #007FFF;
    z-index: -1;
    opacity: 0;
    transition: opacity 100ms linear;
  }

  &:hover::after {
    opacity: 1;
  }

  &:hover,
  &:focus {
    background-color: #007FFF;
    color: #fff;
  }

  &:hover::before {
    opacity: 1;
  }
`;