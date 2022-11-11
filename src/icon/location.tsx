import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const LocationIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M64,3c0-1.657-1.343-3-3-3c-0.375,0-0.73,0.077-1.061,0.202l-0.003-0.007l-58,22
			l0.003,0.008C0.808,22.632,0,23.718,0,25c0,1.414,0.981,2.592,2.298,2.909l-0.002,0.007l27.218,6.57l6.57,27.218l0.007-0.002
			C36.409,63.019,37.586,64,39,64c1.282,0,2.368-0.808,2.797-1.939l0.008,0.003l22-58l-0.019-0.007C63.913,3.726,64,3.376,64,3z
			 M39.638,50.859l-4.722-19.562l-0.007,0.002c-0.263-1.09-1.119-1.941-2.207-2.205l0.002-0.01l-19.562-4.722L55.831,8.169
			L39.638,50.859z"
    />
  </BaseIcon>
);

LocationIcon.defaultProps = BaseIconDefaultProps;
