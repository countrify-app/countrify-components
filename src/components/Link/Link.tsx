import React from "react";
import styled from "styled-components";
import "../../style/globals.css";

interface LinkProps {
  children?: React.ReactNode;
  href: string;
}

const LinkContainer = styled.a<LinkProps>`
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
    cursor: pointer
    text-decoration: underline;
    filter: brightness(0.7)
  }
`;


export const Link = ({ children, href }: LinkProps) => {
  return (
      <LinkContainer href={href}>{children}</LinkContainer>
  );
};

Link.displayName = "Link";

export default Link;
