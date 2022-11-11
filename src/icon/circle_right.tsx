import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleRightIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M47,29.778l0.007-0.008l-10-9L37,20.778C36.468,20.3,35.771,20,35,20c-1.657,0-3,1.343-3,3c0,0.885,0.391,1.673,1,2.222
      l-0.007,0.008L37.182,29H19c-1.657,0-3,1.343-3,3s1.343,3,3,3h18.182l-4.188,3.77L33,38.777c-0.61,0.55-1,1.338-1,2.223
      c0,1.657,1.343,3,3,3c0.771,0,1.468-0.299,2-0.777l0.007,0.008l10-9L47,34.223c0.609-0.55,1-1.337,1-2.223
      S47.609,30.328,47,29.778z M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58
      C17.641,58,6,46.359,6,32C6,17.64,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z"
    />
  </BaseIcon>
);

CircleRightIcon.defaultProps = BaseIconDefaultProps;
