import { HeaderContainer, LoggoutButton, NewTransactionButton } from './styles'
import Image from 'next/legacy/image'
import ngLogo from '../../assets/logo_ng.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { destroyCookie } from 'nookies'
import Router from 'next/router'

interface HeaderProps {
  username: string
}

export function Header({ username }: HeaderProps) {
  function handleLoggout() {
    destroyCookie(undefined, '@ng_trybe.token-1.0.0')
    Router.push('/')
  }

  return (
    <HeaderContainer>
      <main>
        <div>
          <Image src={ngLogo} alt="" width={56} height={56} />
          <h1>Olá, {username}</h1>
        </div>
        <Dialog.Root>
          <div>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
            <LoggoutButton onClick={handleLoggout}>Logout</LoggoutButton>
          </div>
          <NewTransactionModal />
        </Dialog.Root>
      </main>
    </HeaderContainer>
  )
}
