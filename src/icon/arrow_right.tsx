import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const ArrowRightIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M44,31.994c0-0.002,0-0.005,0-0.007c0-0.848-0.352-1.613-0.918-2.159l0.001-0.001l-18-18l-0.008,0.008
      C24.536,11.318,23.806,11,23,11c-1.657,0-3,1.343-3,3c0,0.91,0.406,1.725,1.046,2.275l15.718,15.718L20.84,47.917l0.001,0.001
      C20.321,48.458,20,49.191,20,50c0,1.657,1.343,3,3,3c0.809,0,1.542-0.32,2.082-0.841l0.001,0.001l18-18l-0.001-0.001
      C43.648,33.613,44,32.848,44,32C44,31.998,44,31.996,44,31.994z"
    />
  </BaseIcon>
);

ArrowRightIcon.defaultProps = BaseIconDefaultProps;
