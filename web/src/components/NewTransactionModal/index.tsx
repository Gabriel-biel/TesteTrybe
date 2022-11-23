import { Overlay, Content, CloseButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>
          Nova transação
        </Dialog.Title>
        <CloseButton>
          <X size={24}/>
        </CloseButton>
        
        <form>
          <input type="text" placeholder='Nome do Usuário'/>
          <input type="number" placeholder='Valor'/>

          <button type='submit'>Transferir</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}