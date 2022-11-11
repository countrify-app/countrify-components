import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const ArrowsVerticalIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
			d="M41,48c-0.885,0-1.682,0.384-2.23,0.993l0,0L35,53.182V10.818l3.77,4.189l0,0C39.318,15.616,40.115,16,41,16
				c1.657,0,3-1.343,3-3c0-0.772-0.292-1.475-0.77-2.007l0,0l-9-10l0,0C33.682,0.384,32.885,0,32,0s-1.681,0.384-2.23,0.993l0,0
				l-9,10l0,0C20.292,11.525,20,12.228,20,13c0,1.657,1.343,3,3,3c0.885,0,1.681-0.384,2.23-0.993l0,0L29,10.818v42.364l-3.77-4.188
				l0,0C24.681,48.384,23.885,48,23,48c-1.657,0-3,1.343-3,3c0,0.771,0.292,1.475,0.77,2.007l0,0l9,10l0,0
				C30.319,63.617,31.115,64,32,64s1.682-0.383,2.23-0.993l0,0l9-10l0,0C43.708,52.475,44,51.771,44,51C44,49.343,42.657,48,41,48z"
    />
  </BaseIcon>
);

ArrowsVerticalIcon.defaultProps = BaseIconDefaultProps;
