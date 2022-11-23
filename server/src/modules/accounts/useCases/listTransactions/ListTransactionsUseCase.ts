import { inject, injectable } from 'tsyringe'
import { IListTransactionsDTO } from '../../dtos/TransactionsDTO'
import { IAccountsRepository } from '../../repositories/interfaces/IAccountsRepository'
import { ITransactionsRepository } from '../../repositories/interfaces/ITransactionsRepository'

import { formatISO } from 'date-fns'

@injectable()
export class ListTransactionsUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({ user_id, type, date }: IListTransactionsDTO) {
    const account = await this.accountsRepository.findByUserId(user_id)

    let transactions = await this.transactionsRepository.findByAccountId(
      account.id,
      type,
    )

    transactions = transactions.map((transaction) => {
      if (transaction.debitedAccountId === account.id) {
        return {
          ...transaction,
          type: 'cash_out',
        }
      } else {
        return {
          ...transaction,
          type: 'cash_in',
        }
      }
    })

    if (date) {
      transactions = transactions.filter((transaction) => {
        return (
          formatISO(new Date(transaction.created_at), {
            representation: 'date',
          }) === date
        )
      })
    }

    return transactions
  }
}
