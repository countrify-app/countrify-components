import React from "react";
import styled, { css } from 'styled-components'

export interface AvatarProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large'
}

const AvatarContainer = styled.div<AvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #ccc;
  ${({ size }) => {
    if (size === 'small') {
      return css`
        width: 30px;
        height: 30px;
      `;
    } else if (size === 'medium') {
      return css`
        width: 50px;
        height: 50px;
      `;
    } else if (size === 'large') {
      return css`
        width: 70px;
        height: 70px;
      `;
    }
  }}
`;
export const Avatar = ({ children, size }: AvatarProps) => {
  return <AvatarContainer size={size}>
  {children}</AvatarContainer>;
};

Avatar.displayName = "Avatar";

export default Avatar;
