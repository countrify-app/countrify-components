import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const PowerIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M31,33c1.657,0,3-1.343,3-3V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v3.186l0,0V30C28,31.657,29.343,33,31,33z M42,8.162
      v0.009C41.688,8.061,41.352,8,41,8c-1.657,0-3,1.343-3,3c0,1.306,0.835,2.417,2,2.829v0.003C48.229,17.335,54,25.492,54,35
      c0,12.703-10.297,23-23,23S8,47.703,8,35c0-9.508,5.771-17.666,14-21.168v-0.003c1.165-0.412,2-1.523,2-2.829
      c0-1.657-1.343-3-3-3c-0.351,0-0.687,0.061-1,0.171V8.162C9.439,12.495,2,22.878,2,35c0,16.016,12.984,29,29,29
      c16.016,0,29-12.984,29-29C60,22.878,52.561,12.495,42,8.162z"
    />
  </BaseIcon>
);

PowerIcon.defaultProps = BaseIconDefaultProps;
