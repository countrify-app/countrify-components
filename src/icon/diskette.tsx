import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const DisketteIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M15,25.001c0,1.661,1.343,3.007,3,3.007h4V28h18v0.008h4
			c1.657,0,3-1.346,3-3.007V19h0V1H15v18h0V25.001z M32,5h9v19h-9V5z M63.121,10.879l-9-9C53.578,1.336,52.829,1,52,1h-2v15h0v9.001
			c0,3.272-2.61,5.92-5.856,5.999H17.856C14.611,30.922,12,28.273,12,25.001V16h0V1H3C1.343,1,0,2.343,0,4v56c0,1.657,1.343,3,3,3
			h58c1.657,0,3-1.343,3-3V13C64,12.172,63.664,11.422,63.121,10.879z"
    />
  </BaseIcon>
);

DisketteIcon.defaultProps = BaseIconDefaultProps;
