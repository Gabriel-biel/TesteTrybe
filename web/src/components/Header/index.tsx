import { HeaderContainer, NewTransactionButton } from "./styles";
import Image from "next/legacy/image";
import ngLogo from '../../assets/logo_ng.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Image src={ngLogo} alt='' width={56} height={56}/>
        
        <Dialog.Root>
          <NewTransactionButton>
            Nova Transação
          </NewTransactionButton>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </HeaderContainer>
  )
}