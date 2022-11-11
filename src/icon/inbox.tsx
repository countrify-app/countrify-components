import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const InboxIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M63.796,31.935l0.007-0.003l-8-21l-0.007,0.003C55.366,9.806,54.279,9,53,9H11c-1.28,0-2.365,0.806-2.796,1.935
      l-0.007-0.003l-8,21l0.007,0.003C0.077,32.267,0,32.624,0,33v19c0,1.657,1.343,3,3,3h58c1.657,0,3-1.343,3-3V33
      C64,32.624,63.923,32.267,63.796,31.935z M47,30c-1.657,0-3,1.343-3,3v3H20v-3c0-1.657-1.343-3-3-3H7.353l5.714-15h37.865
      l5.715,15H47z"
    />
  </BaseIcon>
);

InboxIcon.defaultProps = BaseIconDefaultProps;
