import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const SpeechIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M51.841,47.327L45.516,41H19c-3.314,0-6-2.686-6-6V14H4c-1.657,0-3,1.343-3,3v34c0,1.656,1.341,2.998,2.996,3H7.5l0,0H8
      v6c0,0.207,0.021,0.409,0.061,0.605c0.028,0.136,0.076,0.264,0.122,0.393c0.02,0.057,0.03,0.116,0.053,0.17
      c0.048,0.115,0.115,0.219,0.177,0.326c0.035,0.061,0.061,0.126,0.1,0.184c0.098,0.146,0.212,0.278,0.333,0.404
      c0.012,0.012,0.021,0.027,0.033,0.04c0.534,0.535,1.271,0.864,2.084,0.875C10.976,62.996,10.987,63,11,63
      c0.828,0,1.578-0.336,2.121-0.879L21.243,54H22l0,0h3l0,0h6.9l0,0H53l0,0c1.657,0,3-1.343,3-3v-2
      c-1.613,0-3.072-0.645-4.15-1.682L51.841,47.327z M61,2H19c-1.657,0-3,1.343-3,3v30c0,1.657,1.343,3,3,3h27.757l7.121,7.121
      C54.422,45.664,55.172,46,56,46c0.014,0,0.025-0.004,0.037-0.004c0.812-0.01,1.55-0.34,2.084-0.875
      c0.012-0.012,0.021-0.028,0.033-0.04c0.121-0.126,0.234-0.259,0.332-0.404c0.039-0.057,0.065-0.122,0.101-0.184
      c0.062-0.107,0.128-0.211,0.177-0.326c0.023-0.054,0.033-0.114,0.053-0.17c0.047-0.129,0.095-0.257,0.123-0.394
      C58.979,43.409,59,43.207,59,43v-5h2c1.657,0,3-1.343,3-3V5C64,3.343,62.657,2,61,2z"
    />
  </BaseIcon>
);

SpeechIcon.defaultProps = BaseIconDefaultProps;