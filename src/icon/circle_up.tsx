import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleUpIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M43.23,26.993l-9-10L34.223,17c-0.55-0.61-1.336-1-2.223-1c-0.885,0-1.672,0.391-2.222,1l-0.008-0.007l-9,10L20.778,27
      C20.3,27.532,20,28.229,20,29c0,1.657,1.343,3,3,3c0.885,0,1.673-0.391,2.222-1l0.008,0.007L29,26.818V45c0,1.657,1.343,3,3,3
      s3-1.343,3-3V26.818l3.77,4.189L38.777,31c0.55,0.61,1.338,1,2.223,1c1.657,0,3-1.343,3-3c0-0.772-0.3-1.468-0.777-2
      L43.23,26.993z M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32
      C6,17.64,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z"
    />
  </BaseIcon>
);

CircleUpIcon.defaultProps = BaseIconDefaultProps;
