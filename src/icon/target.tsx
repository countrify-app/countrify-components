import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const TargetIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M32,29c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S33.657,29,32,29z M61,29h-3.186
      C56.438,17.042,46.956,7.569,35,6.191V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v3.186C17.042,7.562,7.568,17.044,6.191,29H3
      c-1.657,0-3,1.343-3,3s1.343,3,3,3h3.186C7.562,46.958,17.044,56.432,29,57.809V61c0,1.657,1.343,3,3,3s3-1.343,3-3v-3.191
      C46.956,56.432,56.438,46.958,57.814,35H61c1.657,0,3-1.343,3-3S62.657,29,61,29z M46,35h5.751
      C50.448,43.639,43.634,50.453,35,51.757V46c0-1.657-1.343-3-3-3s-3,1.343-3,3v5.756C20.366,50.453,13.552,43.639,12.249,35H18
      c1.657,0,3-1.343,3-3s-1.343-3-3-3h-5.756C13.547,20.366,20.362,13.552,29,12.249V18c0,1.657,1.343,3,3,3s3-1.343,3-3v-5.756
      C43.634,13.547,50.448,20.362,51.751,29H46c-1.657,0-3,1.343-3,3S44.343,35,46,35z"
    />
  </BaseIcon>
);

TargetIcon.defaultProps = BaseIconDefaultProps;