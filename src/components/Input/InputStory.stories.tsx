import React from 'react';
import { ComponentStory } from '@storybook/react';
import Input, { InputProps } from './Input';

export const InputStory: ComponentStory<typeof Input> = (args: InputProps) => {
  return <Input {...args} />;
};

InputStory.args = {
  type: 'date',
  name: 'input',
  value: '',
  placeholder: 'Enter your input',
  disabled: false,
};

InputStory.storyName = 'Input';