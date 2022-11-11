import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const IphoneIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M46,3H18c-1.657,0-3,1.343-3,3v52c0,1.657,1.343,3,3,3h28c1.657,0,3-1.343,3-3V6C49,4.343,47.657,3,46,3z M32,58
      c-1.105,0-2-0.895-2-2s0.895-2,2-2c1.105,0,2,0.895,2,2S33.105,58,32,58z M46,51H18V9h28V51z"
    />
  </BaseIcon>
);

IphoneIcon.defaultProps = BaseIconDefaultProps;
