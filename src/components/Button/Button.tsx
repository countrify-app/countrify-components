import React from "react";
import styled from "styled-components";
import { color } from "../../_utils/branding";

const arrayOfColors = [  "lightBlue",  "blue",  "darkBlue",  "green",  "red",  "lightRed",  "yellow",  "grey",  "lightGrey",  "white",] as const;
type Colors = typeof arrayOfColors[number];

interface ButtonProps {
  children?: React.ReactNode;
  size?: "small" | "large";
  kind: Colors;
}

const ButtonContainer = styled.button<ButtonProps>`
  font-size: ${({ size }) => (size === "small" ? "10px" : "15px")};
  background-color: ${({ kind }) => color[kind]};
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  max-width: 100%;
  overflow: hidden;
  user-select: none;
  align-items: center;
  white-space: nowrap;
  color: white;
  font-family: Karla;
  :hover {
    filter: drop-shadow(1px 1px 0px black) saturate(0.75);
  }
`;

export const Button = ({ children, size, kind }: ButtonProps) => {
  return (
    <ButtonContainer size={size} kind={kind}>
      {children}
    </ButtonContainer>
  );
};

Button.displayName = "Button";

export default Button;