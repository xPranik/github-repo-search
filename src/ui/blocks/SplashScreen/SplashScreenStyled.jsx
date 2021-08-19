import styled, { keyframes } from "styled-components";

const opacitiAnim = keyframes`
  0% {
    opacity: 100%;
  } 80% {
    opacity: 100%;
  } 100% {
    opacity: 0;
  }
`;

export const NameWrapper = styled.div`
  background-color: #282828;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  z-index: 2;
  animation: ${opacitiAnim} 3.5s;
`;

export const Name = styled.h1`
  font-size: 56px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: #d5ab78;
`;
