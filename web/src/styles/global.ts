import { globalCss } from '.'
import 'react-toastify/dist/ReactToastify.css'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$gray800',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'button, a': {
    cursor: 'pointer',
  },

  'button, input': {
    border: 0,
  },

  a: {
    textDecoration: 'none',
  },

  '.Toastify__toast--error': {
    background: '$red300',
  },

  '.Toastify__toast--success': {
    background: '$green300',
  },
})
