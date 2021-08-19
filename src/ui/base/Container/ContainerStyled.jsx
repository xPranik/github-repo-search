import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 992px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const ContentRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 764px) {
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 15px;
  background-color: #242424;
  @media (min-width: 764px) {
    min-height: 90vh;
    padding: 30px;
  }
`;
