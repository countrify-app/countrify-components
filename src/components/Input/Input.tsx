import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  display: inline-block;
  width: 5rem;
  input[type="text"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 16px;
    width: 100%;
    flex: 1 1 0%;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
    transition: box-shadow 0.3s ease;
  }

  input[type="text"]:focus {
    border-color: #007BFF;
    box-shadow: 0 0 0 3px #007BFF;
    outline: none;
  }

  input[type="text"]:disabled {
    background-color: #f8f8f8;
    cursor: not-allowed;
  }

  label {
    font-size: 12px;
    text-transform: uppercase;
    color: #007BFF; 
  }

`;

export interface InputProps {
children?: React.ReactNode;
type: "text" | "password" | "number" | "email" | "tel" | "checkbox" | "radio" | "date" | "time" | "file" | "range" | "search" | "color" | "datetime-local" | "month" | "week";
name?: string;
value?: string | number | string[];
placeholder?: string;
onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
checked?: boolean;
disabled?: boolean;
required?: boolean;
autoFocus?: boolean;
min?: number | string;
max?: number | string;
minLength?: number;
maxLength?: number;
pattern?: string;
step?: number | string;
}

export const Input: React.FC<InputProps> = ({
  children,
  type,
  name,
  value,
  placeholder,
  onChange,
  checked,
  disabled,
  required,
  autoFocus,
  min,
  max,
  minLength,
  maxLength,
  pattern,
  step,
}: InputProps) => {
  return (
    <StyledInput type={type}>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        required={required}
        autoFocus={autoFocus}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        step={step}
      />
      {children}
    </StyledInput>
  );
};

export default Input;