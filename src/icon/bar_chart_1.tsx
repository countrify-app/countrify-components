import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const BarChartIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M29,50h6c1.657,0,3-1.343,3-3V22c0-1.657-1.343-3-3-3h-6c-1.657,0-3,1.343-3,3
			v25C26,48.657,27.343,50,29,50z M46,50h6c1.657,0,3-1.343,3-3V8c0-1.657-1.343-3-3-3h-6c-1.657,0-3,1.343-3,3v39
			C43,48.657,44.343,50,46,50z M12,50h6c1.657,0,3-1.343,3-3V36c0-1.657-1.343-3-3-3h-6c-1.657,0-3,1.343-3,3v11
			C9,48.657,10.343,50,12,50z M61.5,53h-59C1.119,53,0,54.12,0,55.5v1C0,57.881,1.119,59,2.5,59h59c1.381,0,2.5-1.119,2.5-2.5v-1
			C64,54.12,62.881,53,61.5,53z"
    />
  </BaseIcon>
);

BarChartIcon.defaultProps = BaseIconDefaultProps;
