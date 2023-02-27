import React from 'react';

declare const arrayOfColors: readonly ["lightBlue", "blue", "darkBlue", "green", "red", "lightRed", "yellow", "grey", "lightGrey", "white"];
declare type Colors = typeof arrayOfColors;
declare const arrayOfSize: readonly ["small", "large"];
declare type Sizes = typeof arrayOfSize;
interface ButtonProps {
    label: string;
    kind: Colors[number];
    className?: string;
    size?: Sizes[number];
}
declare const Button: React.FC<ButtonProps>;

interface LogoProps {
    src: string;
    alt: string;
}
declare const Logo: React.FC<LogoProps>;

export { Button, Logo };
