import React from "react";
import {
  AvatarImageWrapper,
  AvatarStyled,
  AvatarWrapper,
  OwnerName,
} from "./AvatarStyled";

const Avatar = ({ src, circle, size, name }) => {
  return (
    <AvatarWrapper>
      <AvatarImageWrapper circle={circle} size={size}>
        <AvatarStyled src={src} alt="avatar" />
      </AvatarImageWrapper>
      {name && <OwnerName>{name}</OwnerName>}
    </AvatarWrapper>
  );
};

export default Avatar;
