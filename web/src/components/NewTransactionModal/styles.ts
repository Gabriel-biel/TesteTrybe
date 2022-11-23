import { styled } from '../../styles'
import * as Dialog from '@radix-ui/react-dialog'
import CurrencyInput from 'react-currency-masked-input'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: '#00000075',
})

export const Content = styled(Dialog.Content, {
  minWidth: '32rem',
  background: '$gray800',
  borderRadius: 6,
  padding: '2.5rem 3rem',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  form: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    button: {
      height: '3.625rem',
      background: '$green500',
      color: '$white',
      fontWeight: 'bold',
      borderRadius: 6,
      marginTop: '1.5rem',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        background: '$green700',
        transition: 'background-color 0.2s',
      },
    },

    span: {
      display: 'block',
      color: '$red300',
      fontSize: '0.75rem',
      textAlign: 'right',
      marginBottom: '0.5rem',
    },
  },
})

export const Input = styled('input', {
  borderRadius: 6,
  background: '$gray900',
  color: '$gray300',
  padding: '1rem',

  border: '1px solid tranparent',

  '&::placeholder': {
    color: '$gray500',
  },

  variants: {
    color: {
      red: {
        border: '1px solid $red300',
      },
    },
  },
})

export const MaskedInput = styled(CurrencyInput, {
  borderRadius: 6,
  background: '$gray900',
  color: '$gray300',
  padding: '1rem',

  border: '1px solid tranparent',

  '&::placeholder': {
    color: '$gray500',
  },

  variants: {
    color: {
      red: {
        border: '1px solid $red300',
      },
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  lineHeight: 0,
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray500',
})
