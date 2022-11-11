import React from "react";
import { color } from "../_utils/branding";
import { BaseIcon, BaseIconDefaultProps, Icon } from "../_utils/icon/BaseIcon";

export const LayersIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path
      fill={props.isDisabled ? color.gray : props.iconColor}
      d="M61,42c-0.406,0-0.793,0.083-1.147,0.229l0-0.001l-0.013,0.005
			c-0.004,0.002-0.009,0.003-0.013,0.005L32,53.753L4.174,42.239c-0.004-0.002-0.009-0.004-0.013-0.005l-0.013-0.005l-0.001,0.001
			C3.793,42.083,3.406,42,3,42c-1.657,0-3,1.343-3,3c0,1.25,0.766,2.32,1.853,2.771l0,0.001l28.974,11.989
			c0.004,0.002,0.009,0.004,0.013,0.005l0.013,0.005l0.001-0.001C31.207,59.917,31.594,60,32,60c0.406,0,0.793-0.083,1.147-0.229
			l0.001,0.001l0.013-0.005c0.004-0.002,0.009-0.004,0.013-0.005l28.973-11.989l0-0.001C63.234,47.32,64,46.25,64,45
			C64,43.343,62.657,42,61,42z M1.854,21.771l0,0.001l28.974,11.989c0.004,0.002,0.009,0.003,0.013,0.005l0.013,0.005l0.001-0.001
			C31.207,33.917,31.594,34,32,34c0.406,0,0.793-0.083,1.147-0.229l0.001,0.001l0.013-0.005c0.004-0.002,0.009-0.004,0.013-0.005
			l28.973-11.989l0-0.001C63.234,21.32,64,20.25,64,19c0-1.25-0.766-2.32-1.853-2.771l0-0.001L33.174,4.239
			c-0.004-0.002-0.009-0.004-0.013-0.005l-0.013-0.005l-0.001,0.001C32.793,4.083,32.406,4,32,4c-0.406,0-0.793,0.083-1.146,0.229
			l-0.001-0.001L30.84,4.233c-0.004,0.002-0.009,0.004-0.013,0.005L1.853,16.228l0,0.001C0.766,16.68,0,17.75,0,19
			C0,20.25,0.766,21.32,1.854,21.771z M61,29c-0.406,0-0.793,0.083-1.147,0.229l0-0.001l-0.013,0.006
			c-0.004,0.002-0.009,0.004-0.013,0.005L32,40.753L4.174,29.239c-0.004-0.002-0.009-0.004-0.013-0.005l-0.013-0.006l-0.001,0.001
			C3.793,29.083,3.406,29,3,29c-1.657,0-3,1.343-3,3c0,1.251,0.766,2.32,1.853,2.771l0,0.001l28.974,11.989
			c0.004,0.002,0.009,0.003,0.013,0.005l0.013,0.005l0.001-0.001C31.207,46.917,31.594,47,32,47c0.406,0,0.793-0.083,1.147-0.229
			l0.001,0.001l0.013-0.005c0.004-0.002,0.009-0.004,0.013-0.005l28.973-11.989l0-0.001C63.234,34.32,64,33.251,64,32
			C64,30.343,62.657,29,61,29z"
    />
  </BaseIcon>
);

LayersIcon.defaultProps = BaseIconDefaultProps;