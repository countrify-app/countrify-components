import React from 'react';
import { Meta } from '@storybook/react';
import "./Logo.css";

export interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => <img src={src} alt={alt} />;

export default Logo
