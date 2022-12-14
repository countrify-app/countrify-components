import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const BellIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M52,45c-1.657,0-3-1.343-3-3V22c0-7.732-6.268-14-14-14c0-1.657-1.343-3-3-3s-3,1.343-3,3c-7.732,0-14,6.268-14,14v20
      c0,1.657-1.343,3-3,3s-3,1.343-3,3s1.343,3,3,3h40c1.657,0,3-1.343,3-3S53.657,45,52,45z M32,60c3.314,0,6-2.686,6-6H26
      C26,57.314,28.686,60,32,60z"
    />
  </BaseIcon>
);

BellIcon.defaultProps = BaseIconDefaultProps;
