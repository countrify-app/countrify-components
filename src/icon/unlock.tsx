import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const UnlockIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M55,32H20V18c0-6.627,5.373-12,12-12s12,5.373,12,12c0,1.657,1.343,3,3,3s3-1.343,3-3c0-9.941-8.059-18-18-18
      c-9.941,0-18,8.059-18,18v14H9c-1.657,0-3,1.343-3,3v26c0,1.657,1.343,3,3,3h46c1.657,0,3-1.343,3-3V35
      C58,33.343,56.657,32,55,32z M35,49.168V55c0,1.657-1.343,3-3,3s-3-1.343-3-3v-5.832c-1.786-1.039-3-2.953-3-5.168
      c0-3.314,2.686-6,6-6c3.314,0,6,2.686,6,6C38,46.215,36.786,48.129,35,49.168z"
    />
  </BaseIcon>
);

UnlockIcon.defaultProps = BaseIconDefaultProps;
