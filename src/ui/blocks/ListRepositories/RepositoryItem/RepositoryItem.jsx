import React from 'react';
import {
    LinkStyled,
    Name,
    Rating,
    RepoBody,
    RepoItemContent,
    RepoItemWrapper
} from "./RepositoryItemStyled";
import star from './../../../../static/icons/star.svg'
import Avatar from "../../../base/Avatar/Avatar";
import {Link} from "react-router-dom";

const RepositoryItem = ({name, rating, image, ownerName}) => {
    return (
        <RepoItemWrapper>
            <RepoItemContent>
                <Avatar src={image} circle/>
                <RepoBody>
                    <Name>{name}</Name>
                    <Rating><img src={star} alt="star"/>{rating}</Rating>
                </RepoBody>
            </RepoItemContent>
            <Link to={`/repository/`+ownerName+'/'+name}>
                <LinkStyled>View more</LinkStyled>
            </Link>

        </RepoItemWrapper>
    );
};

export default RepositoryItem;