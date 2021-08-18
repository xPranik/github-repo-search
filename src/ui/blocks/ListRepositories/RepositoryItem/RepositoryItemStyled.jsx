import styled from "styled-components";

export const RepoItemWrapper = styled.div`
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  transition: box-shadow 0.2s;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const RepoItemContent = styled.div`
  display: flex;
  align-items: center;
`;

export const RepoBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const Name = styled.a`
  color: #d5ab78;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
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

export const LinkStyled = styled.a`
  font-size: 12px;
  padding: 4px 8px;
  color: #b3b3b3;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #b3b3b3;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    color: #d5ab78;
    border-color: #d5ab78;
  }
`;
