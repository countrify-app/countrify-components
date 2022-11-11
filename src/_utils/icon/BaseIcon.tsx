import React from "react";
import cc from "classcat";
import isEmpty from "lodash.isempty";
import { color } from "../branding";

export type Icon = Readonly<{
  size?: number | string;
  className?: string;
  iconClassName?: string;
  title?: string;
  iconColor?: string;
  isDisabled?: boolean;
}>;

export type IconProps = Icon &
  Readonly<{
    children: JSX.Element;
    viewBox?: string;
  }>;

export const BaseIconDefaultProps = {
  className: "",
  iconClassName: "",
  iconColor: color.lightMidnightGreen,
  size: 24,
  title: "",
  badgeAriaLabel: "",
  badgeContent: "",
  isDisabled: false,
};

export const BaseIcon = ({
  iconClassName,
  title,
  children,
  viewBox = "0 0 64 64",
}: IconProps) => {
  const iconClasses = ["icon", iconClassName];

  const icon = (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cc(iconClasses)}
      aria-hidden={isEmpty(title)}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );

  return icon;
};
