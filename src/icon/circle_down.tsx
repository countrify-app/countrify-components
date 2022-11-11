import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleDownIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M41,32c-0.885,0-1.673,0.391-2.223,1l-0.008-0.007L35,37.182V19c0-1.657-1.343-3-3-3s-3,1.343-3,3v18.182l-3.77-4.188
      L25.222,33c-0.549-0.61-1.337-1-2.222-1c-1.657,0-3,1.343-3,3c0,0.771,0.299,1.468,0.778,2l-0.008,0.008l9,10L29.778,47
      c0.549,0.609,1.336,1,2.222,1c0.885,0,1.673-0.391,2.223-1l0.008,0.007l9-10L43.223,37C43.7,36.468,44,35.771,44,35
      C44,33.343,42.657,32,41,32z M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58
      C17.641,58,6,46.359,6,32C6,17.64,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z"
    />
  </BaseIcon>
);

CircleDownIcon.defaultProps = BaseIconDefaultProps;
