import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 5rem
`;

interface InputProps {
children?: React.ReactNode;
type: string;
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
<StyledInput>
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
  >
    {children}
  </input>
</StyledInput>
);
};

export default Input;