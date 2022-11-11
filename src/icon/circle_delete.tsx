import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleDeleteIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32
      C6,17.64,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z M46,21c0-1.657-1.343-3-3-3
      c-0.828,0-1.578,0.336-2.121,0.879L32,27.758l-8.879-8.879C22.579,18.336,21.828,18,21,18c-1.657,0-3,1.343-3,3
      c0,0.828,0.336,1.578,0.879,2.121L27.757,32l-8.879,8.879C18.336,41.422,18,42.172,18,43c0,1.657,1.343,3,3,3
      c0.828,0,1.579-0.336,2.121-0.879L32,36.243l8.879,8.879C41.422,45.664,42.172,46,43,46c1.657,0,3-1.343,3-3
      c0-0.828-0.336-1.578-0.879-2.121L36.243,32l8.879-8.878C45.664,22.578,46,21.829,46,21z"
    />
  </BaseIcon>
);

CircleDeleteIcon.defaultProps = BaseIconDefaultProps;
