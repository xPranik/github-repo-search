import React from 'react';
import {PageWrapperStyled} from "./PageWrapperStyled";
import Container from "../Container/Container";

const PageWrapper = (props) => {
    return (
        <PageWrapperStyled>
            <Container>
                {props.children}
            </Container>
        </PageWrapperStyled>
    );
};

export default PageWrapper;