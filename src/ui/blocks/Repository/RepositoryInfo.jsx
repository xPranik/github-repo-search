import React from "react";
import {
  Date,
  Description,
  Header,
  HeaderStart,
  Links,
  RepositoryInfoStyled,
  Title,
} from "./RepositoryInfoStyled";
import {
  LinkBase,
  Rating,
} from "../ListRepositories/RepositoryItem/RepositoryItemStyled";
import star from "../../../static/icons/star.svg";

const RepositoryInfo = ({
  name,
  fullname,
  description,
  rating,
  created_at,
}) => {
  return (
    <RepositoryInfoStyled>
      <Header>
        <HeaderStart>
          <Title>{name}</Title>
          <Rating>
            <img src={star} alt="star" />
            {rating}
          </Rating>
        </HeaderStart>
        <Date>{created_at}</Date>
      </Header>
      {description && <Description>{description}</Description>}
      <Links>
        <LinkBase href={`https://www.github/${fullname}`} target="_blank">
          github/{fullname}
        </LinkBase>
      </Links>
    </RepositoryInfoStyled>
  );
};

export default RepositoryInfo;
