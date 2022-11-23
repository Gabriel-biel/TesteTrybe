import { styled } from '../../styles'
import cover from '../../assets/cover-banner.jpg'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled('header', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  padding: '2.5rem 0 7.5rem',

  background: `url(${cover.src})`,
  backgroundSize: 'cover',

  main: {
    padding: '0 1rem',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1120,

    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
  },
})

export const NewTransactionButton = styled(Dialog.Trigger, {
  height: '3.125rem',
  background: '$green500',
  color: '$white',
  fontWeight: 'bold',
  padding: '0 1.25rem',
  borderRadius: 6,

  '&:hover': {
    background: '$green300',
    transition: 'background-color 0.2s',
  },
})

export const LoggoutButton = styled('button', {
  height: '3.125rem',
  background: '$red300',
  color: '$white',
  fontWeight: 'bold',
  padding: '0 1.25rem',
  borderRadius: 6,

  '&:hover': {
    background: '$red500',
    transition: 'background-color 0.2s',
  },
})
