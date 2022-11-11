import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const MailIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M63.002,10.78C62.471,10.3,61.773,10,61,10H3c-0.773,0-1.47,0.3-2.002,0.78L32,35L63.002,10.78z M0.894,10.866
      C0.343,11.41,0,12.165,0,13v38c0,0.789,0.311,1.501,0.809,2.037l19.569-23.296L0.894,10.866z M32,41l-8.136-7.881L0.943,53.175
      C1.481,53.684,2.202,54,3,54h58c0.798,0,1.52-0.316,2.057-0.825l-22.92-20.056L32,41z M63.105,10.866L43.622,29.741
      l19.569,23.296C63.689,52.502,64,51.789,64,51V13C64,12.165,63.657,11.41,63.105,10.866z"
    />
  </BaseIcon>
);

MailIcon.defaultProps = BaseIconDefaultProps;
