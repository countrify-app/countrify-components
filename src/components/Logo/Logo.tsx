import React from 'react';
import { Meta } from '@storybook/react';
import "./Button.scss";
const logo = require('../../style/logo/logo.png')

const image = {
  src: logo,
  alt: 'countrify logo',
};

const Logo = () => <img src={image.src} alt={image.alt} />;

export default Logo
