export interface ICreateTransactionDTO {
  loggedUserId: string
  targetUsername: string
  valueInCents: number
}

export interface IListTransactionsDTO {
  user_id: string
  type?: 'cash_in' | 'cash_out'
  date?: string
}
