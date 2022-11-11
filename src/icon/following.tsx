import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const FollowingIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M64.001,59.993c0,0-0.007-0.552-0.092-1.417L59.484,63H61c1.657,0,3-1.343,3-3c0-0.003-0.001-0.005-0.001-0.007H64.001z
      M48.102,59H40c-3.314,0-6-2.686-6-6s2.686-6,6-6h8.102C48.046,46.673,48,46.343,48,46c0-1.186,0.355-2.282,0.947-3.212
     c-0.609-0.213-1.332-0.486-2.247-0.865c-6.205-2.569-7.675-3.409-7.675-3.409l-0.055-5.893c0,0,2.324-1.764,3.049-7.337
     c1.451,0.42,1.942-1.701,2.021-3.056c0.086-1.309,0.858-5.389-0.917-5.025c0.363-2.724,0.648-5.187,0.52-6.491
     c-0.443-4.576-3.608-9.355-11.595-9.704c-6.79,0.349-11.198,5.131-11.643,9.708c-0.128,1.304,0.133,3.764,0.496,6.493
     c-1.774-0.369-1.01,3.719-0.932,5.027c0.086,1.355,0.566,3.482,2.02,3.062c0.722,5.574,3.046,7.353,3.046,7.353l-0.058,5.924
     c0,0-1.47,0.896-7.675,3.466c-6.205,2.574-4.259,0.533-9.314,3.047C0,49.062,0,59.994,0,59.994h0.002C0.001,59.995,0,59.998,0,60
     c0,1.657,1.343,3,3,3h45.832C48.316,62.115,48,61.1,48,60C48,59.657,48.046,59.327,48.102,59z M64,53
     c0-0.828-0.336-1.578-0.879-2.121l-7-7C55.578,43.336,54.828,43,54,43c-1.657,0-3,1.343-3,3c0,0.828,0.336,1.578,0.879,2.121
     L53.757,50H40c-1.657,0-3,1.343-3,3s1.343,3,3,3h13.757l-1.879,1.879C51.336,58.422,51,59.172,51,60c0,1.657,1.343,3,3,3
     c0.828,0,1.578-0.336,2.121-0.879l7-7C63.664,54.578,64,53.829,64,53z"
    />
  </BaseIcon>
);

FollowingIcon.defaultProps = BaseIconDefaultProps;
