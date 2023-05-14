import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  test('renders the Input component', () => {
    render(<Input
      type="text"
      name="myInput"
      value="Hello World"
      placeholder="Enter text"
      onChange={() => {}}
      checked={false}
      disabled={false}
      required={true}
      autoFocus={true}
      min={0}
      max={10}
      minLength={2}
      maxLength={20}
      pattern="[A-Za-z]+"
      step={1}
       />);
  });
});
