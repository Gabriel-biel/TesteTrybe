import { Transaction } from '@prisma/client'

export interface ICreateTransaction {
  debitedAccountId: string
  creditedAccountId: string
  value: number
}

export interface ITransactionsRepository {
  create(data: ICreateTransaction): Promise<Transaction>
  findByAccountId(
    accountId: string,
    type?: 'cash_in' | 'cash_out',
    date?: string,
  ): Promise<Transaction[]>
}
