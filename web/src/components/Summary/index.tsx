import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { api } from '../../services/api'
import { priceFormatter } from '../../utils/formatter'

import { SummaryContainer, SummaryCard } from './styles'

interface SummaryType {
  cash_in: number
  cash_out: number
  balance: number
}

export function Summary() {
  const [summary, setSummary] = useState<SummaryType>({} as SummaryType)
  const { transactions } = useContext(TransactionsContext)

  useEffect(() => {
    async function getBalance() {
      const response = await api.get('accounts/balance')

      setSummary(response.data)
    }
    getBalance()
  }, [transactions])

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.cash_in / 100)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.cash_out / 100)}</strong>
      </SummaryCard>
      <SummaryCard color="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.balance / 100)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
