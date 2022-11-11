import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const EjectIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M42,42H22c-1.657,0-3,1.343-3,3s1.343,3,3,3h20c1.657,0,3-1.343,3-3S43.657,42,42,42z M22,39h20c1.657,0,3-1.343,3-3
      c0-0.584-0.167-1.129-0.456-1.59l0,0l-9.976-15.962c-0.004-0.005-0.006-0.01-0.01-0.016l-0.015-0.022l0,0
      C34.014,17.563,33.073,17,32,17s-2.013,0.563-2.544,1.41l0,0l-0.014,0.022c-0.003,0.005-0.007,0.01-0.01,0.016L19.456,34.41l0,0
      C19.168,34.871,19,35.416,19,36C19,37.657,20.343,39,22,39z"
    />
  </BaseIcon>
);

EjectIcon.defaultProps = BaseIconDefaultProps;
