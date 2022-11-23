import * as Dialog from '@radix-ui/react-dialog'
import { ChangeEvent, useContext, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Overlay, Content, CloseButton, Input, MaskedInput } from './styles'
import { X } from 'phosphor-react'
import { toast } from 'react-toastify'

const NewTransactionFormSchema = z.object({
  username: z
    .string({ required_error: 'Campo obrigatório!' })
    .min(3, 'Mínimo de 3 caracteries'),
  value: z
    .number({ required_error: 'Campo obrigatório' })
    .min(1, 'Valor mínimo de R$ 1,00'),
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>

export function NewTransactionModal() {
  const [value, setValue] = useState('')
  const { createTransaction } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewTransactionFormInputs>()

  async function handleNewTransaction({
    username,
    value,
  }: NewTransactionFormInputs) {
    try {
      await createTransaction(username, value * 100)
      toast.success('Transação concluída com sucesso!')
      reset()
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleNewTransaction)}>
          <Input
            type="text"
            placeholder="Nome do Usuário"
            {...register('username')}
            color={errors.username && 'red'}
          />
          {errors.username && <span>{errors.username.message}</span>}
          <MaskedInput
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            color={errors.value && 'red'}
          />
          {errors.value && <span>{errors.value.message}</span>}
          <button type="submit">Transferir</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
