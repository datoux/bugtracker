import { css } from 'styled-components';

export const color = {
  primary: '#0052cc', // Blue
  success: '#0B875B', // green
  danger: '#E13C3C', // red
  warning: '#F89C1C', // orange
  secondary: '#F4F5F7', // light grey

  textNormal: '#282828',
  textDarkest: '#4d4d4d',
  textDark: '#6e6e6e',
  textMedium: '#848484',
  textLight: '#a4a4a4',
  textLightest: '#c4c4c4',
  textLink: '#0052cc',

  backgroundDarkPrimary: '#0747A6',
  backgroundMedium: '#dfe1e6',
  backgroundLight: '#ebecf0',
  backgroundLightest: '#F4F5F7',
  backgroundLightPrimary: '#D2E5FE',
  backgroundLightSuccess: '#E4FCEF',

  borderLightest: '#dfe1e6',
  borderLight: '#C1C7D0',
  borderInputFocus: '#4c9aff',
};

export const font = {
   regular: 'font-family: "Roboto"; font-weight: normal;',
   bold: 'font-family: "Roboto"; font-weight: bold;',
   sans: 'font-family: "OpenSans"; font-weight: normal;',
   sansBold: 'font-family: "OpenSans"; font-weight: bold;',
  size: size => `font-size: ${size}px;`,
};
