import React from "react";
import { color } from "../../_utils/branding";
import "./Button.scss";
import "../../style/globals.scss";

export interface ButtonProps {
  label: string;
  kind: string;
}

const Button: React.FC<ButtonProps> = ({ label, kind }) => {
  return <button className={kind.toLowerCase()}>{label}</button>;
};

export default Button;
