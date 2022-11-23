import { Transaction } from '@prisma/client'
import { prisma } from '../../../../shared/infra/prisma'
import {
  ICreateTransaction,
  ITransactionsRepository,
} from '../interfaces/ITransactionsRepository'

export class TransactionsRepository implements ITransactionsRepository {
  async findByAccountId(
    accountId: string,
    type?: 'cash_in' | 'cash_out',
  ): Promise<Transaction[]> {
    let transactions: Transaction[]

    if (!type) {
      transactions = await prisma.transaction.findMany({
        where: {
          OR: [
            {
              creditedAccountId: {
                equals: accountId,
              },
            },
            {
              debitedAccountId: {
                equals: accountId,
              },
            },
          ],
        },
      })
    }

    if (type === 'cash_in') {
      transactions = await prisma.transaction.findMany({
        where: {
          creditedAccountId: accountId,
        },
      })
    }

    if (type === 'cash_out') {
      transactions = await prisma.transaction.findMany({
        where: {
          debitedAccountId: accountId,
        },
      })
    }

    return transactions
  }

  async create({
    creditedAccountId,
    debitedAccountId,
    value,
  }: ICreateTransaction): Promise<Transaction> {
    const transaction = await prisma.transaction.create({
      data: {
        debitedAccountId,
        creditedAccountId,
        value,
      },
    })

    return transaction
  }
}
