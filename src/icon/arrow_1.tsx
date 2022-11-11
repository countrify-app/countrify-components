import React from 'react'
import { color } from '../_utils/branding'
import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon/BaseIcon'

export const Arrow1Icon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M63.122,42.878l-6.998-7.001c-0.543-0.543-1.293-0.879-2.121-0.879c-1.657,0-2.999,1.343-2.999,3
      c0,0.829,0.336,1.579,0.879,2.122l1.879,1.879h-1.773v0.005h-3l0,0h-2.756L15.118,10.879C14.575,10.336,13.825,10,12.997,10
      H2.999C1.343,10,0,11.343,0,13.001c0,1.657,1.343,3,2.999,3h8.755l31.114,31.126c0.543,0.543,1.293,0.879,2.12,0.879h8.767
      l-1.873,1.874c-0.543,0.543-0.879,1.293-0.879,2.122c0,1.657,1.343,3,2.999,3c0.828,0,1.578-0.336,2.121-0.879l6.998-7.001
      C63.664,46.578,64,45.828,64,45C64,44.171,63.664,43.421,63.122,42.878z"    />
  </BaseIcon>
)

Arrow1Icon.defaultProps = BaseIconDefaultProps