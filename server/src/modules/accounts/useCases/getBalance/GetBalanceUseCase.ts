import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IUsersRepository } from '../../../users/repositories/interfaces/IUsersRepository'
import { IAccountsRepository } from '../../repositories/interfaces/IAccountsRepository'
import { ITransactionsRepository } from '../../repositories/interfaces/ITransactionsRepository'

@injectable()
export class GetBalanceUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new AppError('User not found', 404)
    }

    const account = await this.accountsRepository.findByUserId(user.id)

    const transactions = await this.transactionsRepository.findByAccountId(
      account.id,
    )

    const summary = transactions.reduce(
      (acc, transactions) => {
        if (transactions.creditedAccountId === account.id) {
          acc.cash_in += transactions.value
        } else {
          acc.cash_out += transactions.value
        }

        return acc
      },
      {
        cash_in: 0,
        cash_out: 0,
      },
    )

    return {
      cash_in: summary.cash_in,
      cash_out: summary.cash_out,
      balance: user.account.balance,
    }
  }
}
