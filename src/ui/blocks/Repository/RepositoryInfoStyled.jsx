import styled from "styled-components";
import { LinkBase } from "../ListRepositories/RepositoryItem/RepositoryItemStyled";

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 16px;
  @media (min-width: 764px) {
    flex-direction: row;
    align-items: center;
    margin-top: 0;
  }
`;

export const HeaderStart = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  margin-right: 8px;
`;
export const Date = styled.span`
  color: #b3b3b3;
  font-size: 12px;
`;
export const Description = styled.p`
  color: #b3b3b3;
  font-size: 14px;
  margin-top: 16px;
`;
export const RepositoryInfoStyled = styled.div`
  margin-left: 16px;
  font-size: 16px;
  width: 100%;
`;

export const Links = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  ${LinkBase} {
    margin-bottom: 8px;
  }
`;
