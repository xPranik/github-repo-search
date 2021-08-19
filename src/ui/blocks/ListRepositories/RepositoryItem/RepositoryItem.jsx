import React from "react";
import {
  LinkStyled,
  Name,
  Rating,
  RepoBody,
  RepoItemActions,
  RepoItemContent,
  RepoItemWrapper,
} from "./RepositoryItemStyled";
import star from "./../../../../static/icons/star.svg";
import Avatar from "../../../base/Avatar/Avatar";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../Pagination/PaginationStyled";

const RepositoryItem = ({ id, fullName, rating, image, onClick, favorite }) => {
  return (
    <RepoItemWrapper>
      <RepoItemContent>
        <Avatar src={image} circle />
        <RepoBody>
          <Link to={"/repository/" + fullName}>
            <Name>{fullName}</Name>
          </Link>
          <Rating>
            <img src={star} alt="star" />
            {rating}
          </Rating>
        </RepoBody>
      </RepoItemContent>
      <RepoItemActions>
        <ButtonStyled active={favorite} onClick={() => onClick(id)}>
          {favorite ? "Remove from favorites" : "Add to favorites"}
        </ButtonStyled>
        <Link to={`/repository/` + fullName}>
          <LinkStyled>View more</LinkStyled>
        </Link>
      </RepoItemActions>
    </RepoItemWrapper>
  );
};

export default RepositoryItem;
