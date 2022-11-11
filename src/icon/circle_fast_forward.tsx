import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleFastForwardIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32
      C6,17.641,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z M45.559,29.437l-9.699-6.789
      C35.35,22.243,34.703,22,34,22c-1.657,0-3,1.343-3,3c0,0.008,0.001,0.016,0.001,0.024h-0.005v4.018l-9.135-6.394
      C21.349,22.243,20.703,22,20,22c-1.657,0-3,1.343-3,3c0,0.008,0.001,0.016,0.001,0.024h-0.005v14h0.005
      C17.013,40.67,18.351,42,20,42c0.708,0,1.358-0.246,1.871-0.654l9.125-6.388v4.067h0.005C31.013,40.67,32.351,42,34,42
      c0.708,0,1.357-0.246,1.871-0.654l9.68-6.777C46.419,34.043,47,33.089,47,32C47,30.914,46.423,29.963,45.559,29.437z"
    />
  </BaseIcon>
);

CircleFastForwardIcon.defaultProps = BaseIconDefaultProps;
