import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleOkIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M46,43.001L46,43.001C46,43,46,43,46,42.999V43.001z M46,20.999v0.002C46,21.001,46,21,46,20.999C46,21,46,21,46,20.999z
      M44,21c-0.828,0-1.578,0.336-2.121,0.879L28,35.758l-6.879-6.879C20.578,28.336,19.828,28,19,28c-1.657,0-3,1.343-3,3
     c0,0.828,0.336,1.578,0.879,2.121l9,9C26.422,42.664,27.172,43,28,43s1.578-0.336,2.121-0.879l16-16
     C46.664,25.579,47,24.828,47,24C47,22.343,45.657,21,44,21z M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32
     S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32C6,17.64,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z"
    />
  </BaseIcon>
);

CircleOkIcon.defaultProps = BaseIconDefaultProps;
