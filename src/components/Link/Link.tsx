import React from "react";
import "./Link.css";
import "../../style/globals.css";

export interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

const Button: React.FC<LinkProps> = ({ children, href, className }) => {
  return (
    <div className={className}>
      <a href={href}>{children}</a>
    </div>
  );
};

export default Button;
