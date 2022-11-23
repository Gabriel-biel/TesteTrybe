import { styled } from "../../styles";
import cover from '../../assets/cover-banner.jpg'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled('header', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  padding: '2.5rem 0 7.5rem',

  // background: '$gray900',

  background: `url(${cover.src})`,
  backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
 
  div: {
    padding: '0 1rem',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1120
  },
})

export const NewTransactionButton = styled(Dialog.Trigger,{
  height: '3.125rem',
  background: '$green500',
  color: '$white',
  fontWeight: 'bold',
  padding: '0 1.25rem',
  borderRadius: 6,

  '&:hover': {
    background: '$green300',
    transition: 'background-color 0.2s',
  }
})