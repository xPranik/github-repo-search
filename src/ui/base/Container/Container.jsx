import React from 'react';
import {ContainerStyled} from "./ContainerStyled";

const Container = (props) => {
    return (
        <ContainerStyled>
            {props.children}
        </ContainerStyled>
    );
};

export default Container;