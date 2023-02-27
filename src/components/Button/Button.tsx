import React from "react";
import "./Button.css";
import "../../style/globals.css";

const arrayOfColors = [
  "lightBlue",
  "blue",
  "darkBlue",
  "green",
  "red",
  "lightRed",
  "yellow",
  "grey",
  "lightGrey",
  "white",
] as const;
type Colors = typeof arrayOfColors;

const arrayOfSize = ["small", "large"] as const;
type Sizes = typeof arrayOfSize;

export interface ButtonProps {
  label: string;
  kind: Colors[number];
  className?: string;
  size?: Sizes[number];
}

const Button: React.FC<ButtonProps> = ({ label, kind, className, size }) => {
  return (
    <button className={`${kind.toLowerCase()} ${className} ${size}`}>
      {label}
    </button>
  );
};

export default Button;
