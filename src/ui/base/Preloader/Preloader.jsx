import React from "react";
import { PreloaderStyled, PreloaderWrapper } from "./PreloaderStyled";

const Preloader = () => {
  return (
    <PreloaderWrapper>
      <PreloaderStyled>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </PreloaderStyled>
    </PreloaderWrapper>
  );
};

export default Preloader;
