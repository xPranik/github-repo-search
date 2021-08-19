import styled from "styled-components";

export const PageNum = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  color: #d5ab78;
  display: inline-flex;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  font-size: 12px;
  padding: 4px 8px;
  color: ${props => props.active ? 'black' : '#b3b3b3'};
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.active ? '#d5ab78' : 'transparent'};
  border-radius: 3px;
  border: 1px solid #b3b3b3;
  white-space: nowrap;
  &:disabled {
    opacity: 0.75;
  }
  &:hover:not(:disabled) {
    cursor: pointer;
    color: #d5ab78;
    border-color: #d5ab78;
    background-color: transparent;
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
