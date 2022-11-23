import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray400: '#8d8d99',
      gray500: '#7c7c8a',
      gray600: '#323238',
      gray700: '#29292e',
      gray800: '#202024',
      gray900: '#121214',

      green300: '#00b37e',
      green500: '#00875f',
      green700: '#015f43',

      red300: '#f75a68',
      red500: '#ab222e',
      red700: '#7a1921',
    },
  },
})
