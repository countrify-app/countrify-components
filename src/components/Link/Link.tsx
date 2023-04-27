import React from "react";
import styled from "styled-components";
import "../../style/globals.css";

interface LinkProps {
  children?: React.ReactNode;
  href: string;
}

const StyledLink = styled.a<LinkProps>`
  font-family: Karla;
  color: var(--blue);
  text-decoration: none;
  :visited {
    color: var(--blue)
  }
  :active {
    color: var(--blue);
    filter: brightness(0.7)
  }
  :hover {
    text-decoration: underline;
    filter: brightness(0.7)
  }
  cursor: pointer
`;


export const Link = ({ children, href }: LinkProps) => {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  );
};

Link.displayName = "Link";

export default Link;
