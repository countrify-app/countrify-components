import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CloseIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M36.243,32l11.879-11.879C48.664,19.579,49,18.828,49,18c0-1.657-1.343-3-3-3c-0.828,0-1.578,0.336-2.121,0.879
      L32,27.757L20.121,15.879C19.578,15.336,18.828,15,18,15c-1.657,0-3,1.343-3,3c0,0.828,0.336,1.578,0.879,2.121L27.757,32
      L15.879,43.879C15.336,44.422,15,45.172,15,46c0,1.657,1.343,3,3,3c0.828,0,1.578-0.336,2.121-0.879L32,36.243l11.879,11.879
      C44.422,48.664,45.172,49,46,49c1.657,0,3-1.343,3-3c0-0.828-0.336-1.578-0.879-2.121L36.243,32z"
    />
  </BaseIcon>
);

CloseIcon.defaultProps = BaseIconDefaultProps;
