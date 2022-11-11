import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const PinIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,0C18.746,0,8,10.747,8,24c0,13.254,24,40,24,40s24-26.746,24-40C56,10.747,45.254,0,32,0z M32,40
      c-8.836,0-16-7.164-16-16S23.164,8,32,8s16,7.164,16,16S40.836,40,32,40z"
    />
  </BaseIcon>
);

PinIcon.defaultProps = BaseIconDefaultProps;
