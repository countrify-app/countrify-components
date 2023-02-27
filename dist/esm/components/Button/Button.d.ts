import React from "react";
import "./Button.css";
import "../../style/globals.css";
declare const arrayOfColors: readonly ["lightBlue", "blue", "darkBlue", "green", "red", "lightRed", "yellow", "grey", "lightGrey", "white"];
declare type Colors = typeof arrayOfColors;
declare const arrayOfSize: readonly ["small", "large"];
declare type Sizes = typeof arrayOfSize;
export interface ButtonProps {
    label: string;
    kind: Colors[number];
    className?: string;
    size?: Sizes[number];
}
declare const Button: React.FC<ButtonProps>;
export default Button;
