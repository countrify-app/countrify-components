import React from "react";
import "./Notification.css";
import "../../style/globals.css";

export interface LoadingProps {
  className?: string;
  small: true;
}

const Loading: React.FC<LoadingProps> = ({ className, small }) => {
  return <div className={`loading${small ? "small " : "regular"}${className}`}></div>;
};

export default Loading;
