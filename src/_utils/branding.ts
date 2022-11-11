interface Color {
  [propName: string]: string
}

export const color: Color = {
  lightBlue: '#E6F7FE',
  blue: '#00AFF5',
  darkBlue: '#022B3A',
  green: '#04A777',
  red: '#EE4266',
  lightRed: '#FAC7D2',
  yellow: '#FFD23F',
  grey: '#DDD',
  lightGrey: '#EDEDED',
  white: '#FFF',
}

type Font = {
  [key: string]: {
    size: string
    lineHeight: string
  }
}

type defaultBranding = {
  [key: string]: string
}


export const font: Font = {
  s: {
    size: '13px',
    lineHeight: '16px',
  },
  base: {
    size: '16px',
    lineHeight: '20px',
  },
  m: {
    size: '18px',
    lineHeight: '20px',
  },
  l: {
    size: '22px',
    lineHeight: '24px',
  },
  xl: {
    size: '30px',
    lineHeight: String(Math.floor((32 / 30) * 100) / 100),
  },
  xxl: {
    size: '82px',
    lineHeight: '82px',
  },
}

export const fontWeight: defaultBranding = {
  regular: '400',
  medium: '500',
}

export const space: defaultBranding = {
  none: '0',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
  xxl: '48px',
}

export const horizontalSpace: defaultBranding = {
  inner: '8px',
  outer: '16px',
  global: '24px',
}

export const radius: defaultBranding = {
  none: '0',
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
}

export const icons = ['Alarm', 'Android', 'Apple', 'Arrow1', 'Arrow2', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowsHorizontal', 'ArrowVertical', 'Arrows', 'BarChart', 'BarChart2', 'Bell', 'Bin', 'Block', 'Book', 'BrightnessLow', 'Calendar', 'CircleDelete', 'CircleDown', 'CircleFastForward', 'CircleLeft', 'CircleOk', 'CirclePause', 'CirclePlay', 'CircleRewind', 'CircleRight', 'CircleUp', 'Clip', 'Close', 'Cloud', 'Cog', 'Diskette', 'Eject', 'Followers', 'Following', 'Globe', 'Heart', 'Home', 'Inbox', 'Iphone', 'Layers', 'Link', 'Loading', 'Location', 'Lock', 'Mail', 'MicrophoneOff', 'Microphone', 'PieChart', 'Pin', 'Power', 'Speech', 'SpeechVar', 'Target', 'Unlock', 'UserAdd', 'UserRemove', 'User', 'View', 'Volume', 'Wifi']

export const branding = {
  color,
  font,
  fontWeight,
  space,
  radius,
  icons
}