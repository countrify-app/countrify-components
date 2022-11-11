import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleLeftIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M45,29H26.818l4.189-3.77L31,25.222c0.61-0.549,1-1.337,1-2.222c0-1.657-1.343-3-3-3c-0.772,0-1.468,0.3-2,0.778
      l-0.007-0.008l-10,9L17,29.778c-0.61,0.549-1,1.336-1,2.222s0.391,1.673,1,2.223l-0.007,0.008l10,9L27,43.223
      C27.532,43.701,28.228,44,29,44c1.657,0,3-1.343,3-3c0-0.885-0.391-1.673-1-2.223l0.007-0.008L26.818,35H45c1.657,0,3-1.343,3-3
      S46.657,29,45,29z M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32
      C6,17.64,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z"
    />
  </BaseIcon>
);

CircleLeftIcon.defaultProps = BaseIconDefaultProps;
