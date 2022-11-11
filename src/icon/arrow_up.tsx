import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const ArrowUpIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M52.159,38.918L52.159,38.918L34.16,20.917l-0.001,0.001C33.613,20.352,32.848,20,32,20c-0.002,0-0.004,0-0.007,0
      s-0.004,0-0.007,0c-0.848,0-1.613,0.352-2.159,0.918l-0.001-0.001l-18,18l0.008,0.008C11.318,39.464,11,40.195,11,41
      c0,1.657,1.343,3,3,3c0.91,0,1.725-0.406,2.275-1.046l15.718-15.718L47.917,43.16l0.001-0.001C48.458,43.68,49.191,44,50,44
      c1.657,0,3-1.343,3-3C53,40.191,52.68,39.458,52.159,38.918z"
    />
  </BaseIcon>
);

ArrowUpIcon.defaultProps = BaseIconDefaultProps;
