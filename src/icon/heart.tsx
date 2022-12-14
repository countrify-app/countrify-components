import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const HeartIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M58.729,9.272C55.328,5.873,50.809,4,46,4s-8.662,1.727-12.061,5.126c-0.002,0.002-0.004,0.003-0.006,0.005l-0.002,0.001
      L32,11.565l-1.932-2.286c-0.002-0.002-0.004-0.004-0.006-0.006c0,0-0.001,0-0.001-0.001C26.661,5.873,22.808,4,18,4
      S8.672,5.873,5.272,9.272C1.872,12.672,0,17.192,0,22c0,4.806,1.87,9.323,5.266,12.723L29.16,58.816
      C29.911,59.574,30.933,60,32,60c1.066,0,2.089-0.426,2.84-1.184l23.893-24.092C62.129,31.325,64,26.806,64,22
      C64,17.192,62.128,12.672,58.729,9.272z"
    />
  </BaseIcon>
);

HeartIcon.defaultProps = BaseIconDefaultProps;
