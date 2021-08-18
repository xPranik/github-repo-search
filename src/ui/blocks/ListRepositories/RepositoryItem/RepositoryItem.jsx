import React from 'react';
import {
    LinkStyled,
    Name,
    Rating,
    RepoBody, RepoItemActions,
    RepoItemContent,
    RepoItemWrapper
} from "./RepositoryItemStyled";
import star from './../../../../static/icons/star.svg'
import Avatar from "../../../base/Avatar/Avatar";
import {Link} from "react-router-dom";
import {ButtonStyled} from "../../Pagination/PaginationStyled";

const RepositoryItem = ({id, name, rating, image, ownerName, onClick}) => {
    return (
        <RepoItemWrapper>
            <RepoItemContent>
                <Avatar src={image} circle/>
                <RepoBody>
                    <Name>{name}</Name>
                    <Rating><img src={star} alt="star"/>{rating}</Rating>
                </RepoBody>
            </RepoItemContent>
            <RepoItemActions>
                <ButtonStyled onClick={() => onClick(id)}>Add to favorites</ButtonStyled>
                <Link to={`/repository/`+ownerName+'/'+name}>
                    <LinkStyled>View more</LinkStyled>
                </Link>
            </RepoItemActions>

        </RepoItemWrapper>
    );
};

export default RepositoryItem;