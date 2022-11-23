import { useContext, useEffect, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'
import {
  SearchFormContainer,
  TransactionFilterType,
  TransactionFilterTypeButton,
} from './styles'

export function SearchForm() {
  const [date, setDate] = useState('')
  const [type, setType] = useState('')

  const { fetchTransactions } = useContext(TransactionsContext)

  useEffect(() => {
    fetchTransactions(type, date)
  }, [date, type])

  return (
    <SearchFormContainer>
      <input
        type="date"
        placeholder="Filtrar por data"
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <TransactionFilterType
        defaultValue=""
        onValueChange={(value) => setType(value)}
        value={type}
      >
        <TransactionFilterTypeButton value="">
          Todas
        </TransactionFilterTypeButton>
        <TransactionFilterTypeButton value="cash_in">
          Entradas
        </TransactionFilterTypeButton>
        <TransactionFilterTypeButton value="cash_out">
          Saídas
        </TransactionFilterTypeButton>
      </TransactionFilterType>
    </SearchFormContainer>
  )
}
