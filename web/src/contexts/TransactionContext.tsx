import { createContext, ReactNode, useCallback, useEffect, useState } from "react"
import { api } from "../services/api"

interface Transaction {
  id: string
  type: 'cash_in' | 'cash_out'
  value: number,
  created_at: string
}

interface Summary {
  cash_in: number
  cash_out: number
  balance: number
}

interface TransactionsContextType {
  transactions: Transaction[]
  summary: Summary
  fetchTransactions: (type?: string, date?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionProvider({children}: TransactionProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([])
  const [ summary, setSummary ] = useState<Summary>({} as Summary)

  async function fetchTransactions (type?: string, date?: string) {
    if(!type && !date) {
      const response = await api.get(`accounts/transaction`)
      setTransactions(response.data)

      return
    }
    const response = await api.get(`accounts/transaction?type=${type ?? ''}&date=${date ?? ''}`)
    setTransactions(response.data)
  }

  useEffect(() => {
    async function getBalance(){
      const response = await api.get('accounts/balance')
      
      setSummary(response.data)
    }
    fetchTransactions()
    getBalance()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        summary,
        fetchTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}