import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const MicrophoneIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,40c6.627,0,12-5.373,12-12V12c0-6.627-5.373-12-12-12S20,5.373,20,12v16C20,34.628,25.373,40,32,40z M54,29.023
      c0-0.005,0-0.01-0.001-0.015C53.999,29.005,54,29.003,54,29c0-1.657-1.343-3-3-3s-3,1.343-3,3l0,0
      c-0.004,8.835-7.165,15.996-16,16c-8.835-0.004-15.996-7.165-16-16l0,0c0-1.657-1.343-3-3-3s-3,1.343-3,3
      c0,0.003,0.001,0.005,0.001,0.008C10,29.013,10,29.018,10,29.023c0,11.125,8.274,20.295,19,21.752V58H19c-1.657,0-3,1.343-3,3
      s1.343,3,3,3h26c1.657,0,3-1.343,3-3s-1.343-3-3-3H35v-7.225C45.727,49.318,54,40.148,54,29.023z"
    />
  </BaseIcon>
);

MicrophoneIcon.defaultProps = BaseIconDefaultProps;
