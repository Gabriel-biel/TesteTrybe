import { createContext, ReactNode, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: string
  type: 'cash_in' | 'cash_out'
  value: number
  created_at: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (type?: string, date?: string) => Promise<void>
  createTransaction: (targetUsername: string, value: number) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(type?: string, date?: string) {
    if (!type && !date) {
      const response = await api.get(`accounts/transaction`)
      setTransactions(response.data)

      return
    }
    const response = await api.get(
      `accounts/transaction?type=${type ?? ''}&date=${date ?? ''}`,
    )
    setTransactions(response.data)
  }

  async function createTransaction(targetUsername: string, value: number) {
    const response = await api.post('accounts/transaction/new', {
      targetUsername,
      valueInCents: value,
    })
    setTransactions((state) => [response.data.transaction, ...state])
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
