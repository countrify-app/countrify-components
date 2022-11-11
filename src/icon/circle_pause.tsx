import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CirclePauseIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32
      C6,17.641,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z M29,24c0-1.657-1.343-3-3-3s-3,1.343-3,3
      c0,0.002,0,0.005,0,0.007h-0.002v16H23C23.004,41.661,24.346,43,26,43c1.657,0,3-1.343,3-3c0-0.023-0.001-0.047-0.002-0.07V24.07
      C28.999,24.047,29,24.024,29,24z M41,24c0-1.657-1.343-3-3-3s-3,1.343-3,3c0,0.002,0,0.005,0,0.007h-0.002v16H35
      C35.004,41.661,36.346,43,38,43c1.657,0,3-1.343,3-3c0-0.023-0.001-0.047-0.002-0.07V24.07C40.999,24.047,41,24.024,41,24z"
    />
  </BaseIcon>
);

CirclePauseIcon.defaultProps = BaseIconDefaultProps;
