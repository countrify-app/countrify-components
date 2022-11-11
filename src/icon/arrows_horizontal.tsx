import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const ArrowsHorizontalIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M64,32c0-0.885-0.384-1.681-0.993-2.23l0,0l-10-9l0,0C52.475,20.292,51.771,20,51,20c-1.657,0-3,1.343-3,3
				c0,0.885,0.383,1.681,0.993,2.23l0,0L53.182,29H10.818l4.189-3.77l0,0C15.617,24.681,16,23.885,16,23c0-1.657-1.343-3-3-3
				c-0.772,0-1.475,0.292-2.007,0.77l0,0l-10,9l0,0C0.384,30.319,0,31.115,0,32s0.383,1.68,0.993,2.23l0,0l10,9l0,0
				C11.525,43.709,12.228,44,13,44c1.657,0,3-1.343,3-3c0-0.885-0.383-1.68-0.993-2.23l0,0L10.818,35h42.364l-4.188,3.77l0,0
				C48.384,39.32,48,40.115,48,41c0,1.657,1.343,3,3,3c0.771,0,1.475-0.292,2.007-0.77l0,0l10-9l0,0C63.617,33.682,64,32.885,64,32z
				"
    />
  </BaseIcon>
);

ArrowsHorizontalIcon.defaultProps = BaseIconDefaultProps;
