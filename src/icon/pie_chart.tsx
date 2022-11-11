import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const PieChartIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M35,0v29h29C64,12.984,51.016,0,35,0z M29,6C12.984,6,0,18.984,0,35c0,16.018,12.984,29,29,29c16.016,0,29-12.984,29-29
      H29V6z"
    />
  </BaseIcon>
);

PieChartIcon.defaultProps = BaseIconDefaultProps;
