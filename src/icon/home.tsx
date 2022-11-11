import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const HomeIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M6,39v21c0,1.657,1.343,3,3,3h28V39h12v24h6c1.657,0,3-1.343,3-3V39L32,13L6,39z M27,51H15V39h12V51z M63.189,31.96
      l0.006-0.007L52,20.757V12c0-1.657-1.343-3-3-3s-3,1.343-3,3v2.757L34.195,2.953l-0.002,0.002
      c-0.478-0.512-1.131-0.857-1.865-0.937c-0.003,0-0.006-0.001-0.009-0.001c-0.045-0.005-0.09-0.008-0.135-0.011
      c-0.008,0-0.017-0.001-0.025-0.002C32.107,2.002,32.054,2,32.001,2H32c-0.85,0-1.616,0.354-2.162,0.922L0.922,31.838
      C0.354,32.384,0,33.15,0,34c0,1.657,1.343,3,3,3c0.821,0,1.565-0.33,2.106-0.864l0.001,0.001L32,9.245v0.001l0.077,0.072V9.32
      l26.877,26.877l0.007-0.008C59.496,36.688,60.21,37,61,37c1.657,0,3-1.343,3-3C64,33.21,63.688,32.496,63.189,31.96z"
    />
  </BaseIcon>
);

HomeIcon.defaultProps = BaseIconDefaultProps;
