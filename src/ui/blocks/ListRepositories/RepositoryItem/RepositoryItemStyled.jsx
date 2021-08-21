import styled from "styled-components";

export const RepoItemWrapper = styled.div`
  background: #121212;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  transition: box-shadow 0.2s;
  flex-direction: column;
  border: 1px solid;
  border-color: ${(props) => (props.favorite ? "#d5ab78" : "transparent")};
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  }
  @media (min-width: 764px) {
    padding: 12px 18px;
    flex-direction: row;
    align-items: center;
  }
`;

export const RepoItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export const RepoItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 12px;
  @media (min-width: 764px) {
    margin-top: 0;
    justify-content: center;
  }
`;

export const RepoBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const Name = styled.div`
  color: #d5ab78;
  font-size: 12px;
  word-break: break-all;
  @media (min-width: 764px) {
    font-size: 16px;
  }
`;

export const Rating = styled.div`
  font-size: 14px;
  color: #b3b3b3;
  display: inline-flex;
  align-items: center;
  img {
    width: 12px;
    margin-right: 4px;
  }
`;

export const LinkBase = styled.a`
  font-size: 14px;
  color: #d5ab78;
  display: inline-flex;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const LinkStyled = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  color: ${props => props.active ? '#d5ab78' : '#b3b3b3'};
  align-items: center;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${props => props.active ? '#d5ab78' : 'b3b3b3'};
  white-space: nowrap;
  margin-left: 8px;
  &:hover {
    cursor: pointer;
    color: #d5ab78;
    border-color: #d5ab78;
  }
`;
