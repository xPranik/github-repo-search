import styled, { keyframes } from "styled-components";

const ringSpin = keyframes`
    from {
        transform: rotate(0deg);
}
    to {
        transform: rotate(360deg);
}
`;

export const PreloaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
`;

export const PreloaderStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid;
    border-radius: 50%;
    animation: ${ringSpin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
