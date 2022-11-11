import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const BinIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M53,9H38V6c0-1.657-1.343-3-3-3h-6c-1.657,0-3,1.343-3,3v3H11c-1.657,0-3,1.343-3,3v3h48v-3C56,10.343,54.657,9,53,9z
      M11,58c0,1.657,1.343,3,3,3h36c1.657,0,3-1.343,3-3V18H11V58z M41,27c0-1.657,1.343-3,3-3s3,1.343,3,3v25c0,1.657-1.343,3-3,3
     s-3-1.343-3-3V27z M29,27c0-1.657,1.343-3,3-3s3,1.343,3,3v25c0,1.657-1.343,3-3,3s-3-1.343-3-3V27z M17,27c0-1.657,1.343-3,3-3
     s3,1.343,3,3v25c0,1.657-1.343,3-3,3s-3-1.343-3-3V27z"
    />
  </BaseIcon>
);

BinIcon.defaultProps = BaseIconDefaultProps;
