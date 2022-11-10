import React from 'react';

import { Meta } from '@storybook/react';

export default {
  title: 'img',
} as Meta;

const image = {
  src: logo,
  alt: 'countrify logo',
};

export const WithAnImage = () => <img src={image.src} alt={image.alt} />;
