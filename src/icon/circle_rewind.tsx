import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const CircleRewindIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M47,25c0-1.657-1.343-3-3-3c-0.703,0-1.35,0.242-1.861,0.648l-9.135,6.394v-4.018h-0.006C32.999,25.016,33,25.008,33,25
      c0-1.657-1.343-3-3-3c-0.703,0-1.349,0.242-1.861,0.648l-9.699,6.789C17.577,29.963,17,30.914,17,32
      c0,1.089,0.581,2.043,1.449,2.568l9.68,6.777C28.642,41.754,29.292,42,30,42c1.649,0,2.986-1.33,2.999-2.977h0.005v-4.066
      l9.125,6.387C42.643,41.754,43.292,42,44,42c1.648,0,2.986-1.33,2.999-2.977h0.005v-14h-0.005C46.999,25.016,47,25.008,47,25z
       M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M32,58C17.641,58,6,46.359,6,32
      C6,17.641,17.641,6,32,6c14.359,0,26,11.64,26,26C58,46.359,46.359,58,32,58z"
    />
  </BaseIcon>
);

CircleRewindIcon.defaultProps = BaseIconDefaultProps;
