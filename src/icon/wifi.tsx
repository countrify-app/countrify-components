import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const WifiIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,41c-3.314,0-6,2.686-6,6s2.686,6,6,6c3.314,0,6-2.686,6-6S35.314,41,32,41z M32,26
				c-5.343,0-10.062,2.629-12.968,6.654l3.302,4.256C24.519,33.938,28.029,32,32,32c3.971,0,7.482,1.938,9.666,4.91l3.302-4.256
				C42.062,28.629,37.343,26,32,26z M32,11c-8.791,0-16.721,3.665-22.363,9.544l3.739,4.819C17.954,20.242,24.59,17,32,17
				s14.046,3.242,18.624,8.364l3.739-4.819C48.721,14.666,40.791,11,32,11z"
    />
  </BaseIcon>
);

WifiIcon.defaultProps = BaseIconDefaultProps;
