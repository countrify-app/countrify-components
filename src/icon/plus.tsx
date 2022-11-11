import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const PlusIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M52,29H35V12c0-1.657-1.343-3-3-3s-3,1.343-3,3v17H12c-1.657,0-3,1.343-3,3s1.343,3,3,3h17v17c0,1.657,1.343,3,3,3
      s3-1.343,3-3V35h17c1.657,0,3-1.343,3-3S53.657,29,52,29z"
    />
  </BaseIcon>
);

PlusIcon.defaultProps = BaseIconDefaultProps;
