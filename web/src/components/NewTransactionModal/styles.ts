import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

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

  form : {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    input: {
      borderRadius: 6,
      background: '$gray900',
      color: '$gray300',
      padding: '1rem',

      '&::placeholder': {
        color: '$gray500',
      }
    },

    button: {
      height: '3.625rem',
      background: '$green500',
      color: '$white',
      fontWeight: 'bold',
      borderRadius: 6,
      marginTop: '1.5rem',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      },

      '&:not(:disabled):hover': {
        background: '$green700',
        transition: 'background-color 0.2s'
      }
    }
  }
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  lineHeight: 0,
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray500',
})


