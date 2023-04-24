import React from "react";
import styled from "styled-components";
import "../../style/globals.css";

interface CardProps {
  children?: React.ReactNode;
  href: string;
}

const CardContainer = styled.a<CardProps>`
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


export const Card = ({ children, href }: CardProps) => {
  return (
    <CardContainer href={href}>{children}</CardContainer>
  );
};

Card.displayName = "Card";

export default Card;
