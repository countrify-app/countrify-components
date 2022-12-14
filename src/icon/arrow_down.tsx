import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const ArrowDownIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M53,23c0-1.657-1.343-3-3-3c-0.809,0-1.542,0.321-2.082,0.841l-0.001-0.001L31.993,36.764L16.275,21.046
      C15.725,20.406,14.91,20,14,20c-1.657,0-3,1.343-3,3c0,0.805,0.318,1.536,0.835,2.075l-0.008,0.008l18,18l0.001-0.001
      C30.374,43.648,31.139,44,31.987,44c0.002,0,0.004,0,0.007,0c0.002,0,0.004,0,0.007,0c0.849,0,1.612-0.352,2.159-0.918
      l0.001,0.001l18-18l-0.001-0.001C52.68,24.543,53,23.809,53,23z"
    />
  </BaseIcon>
);

ArrowDownIcon.defaultProps = BaseIconDefaultProps;
