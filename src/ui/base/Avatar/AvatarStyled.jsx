import styled from "styled-components";

export const AvatarImageWrapper = styled.div`
  width: ${(props) => (props.size ? props.size + "px" : "42px")};
  height: ${(props) => (props.size ? props.size + "px" : "42px")};
  ${(props) => props.circle && "border-radius: 50%"};
  overflow: hidden;
  position: relative;
`;
export const AvatarWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarStyled = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OwnerName = styled.div`
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;
