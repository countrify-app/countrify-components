import React from "react";
import styled from "styled-components";

export interface LoadingProps {
  size?: "small" | "regular";
}

const StyledLoading = styled.div<LoadingProps>`
  display: inline-block;
  width: ${({ size }) => (size === "small" ? "30px" : "80px")};
  height: ${({ size }) => (size === "small" ? "30px" : "80px")};
  :after {
    content: " ";
    display: block;
    border-radius: 50%;
    border: 4px solid var(--blue);
    border-color: var(--blue) transparent var(--blue) transparent;
    animation: loading 1.2s linear infinite;
    width: ${({ size }) => (size === "small" ? "26px" : "64px")};
    height: ${({ size }) => (size === "small" ? "26px" : "64px")};
    margin: ${({ size }) => (size === "small" ? "3px" : "8px")};
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC<LoadingProps> = ({ size }) => {
  return <StyledLoading size={size} />;
};

export default Loading;
