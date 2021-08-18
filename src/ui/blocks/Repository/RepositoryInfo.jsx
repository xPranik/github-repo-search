import React from "react";
import {
  Date,
  Description,
  Header,
  RepositoryInfoStyled,
  Title,
} from "./RepositoryInfoStyled";
import { Rating } from "../ListRepositories/RepositoryItem/RepositoryItemStyled";
import star from "../../../static/icons/star.svg";

const RepositoryInfo = ({ name, description, rating, created_at }) => {
  return (
    <RepositoryInfoStyled>
      <Header>
        <Title>{name}</Title>
        <Date>{created_at}</Date>
        <Rating>
          <img src={star} alt="star" />
          {rating}
        </Rating>
      </Header>
      <Description>{description}</Description>
    </RepositoryInfoStyled>
  );
};

export default RepositoryInfo;
