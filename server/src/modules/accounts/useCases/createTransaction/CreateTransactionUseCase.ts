import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { IUsersRepository } from '../../../users/repositories/interfaces/IUsersRepository'
import { ICreateTransactionDTO } from '../../dtos/TransactionsDTO'
import { IAccountsRepository } from '../../repositories/interfaces/IAccountsRepository'
import { ITransactionsRepository } from '../../repositories/interfaces/ITransactionsRepository'

@injectable()
export class CreateTransactionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute({
    valueInCents,
    targetUsername,
    loggedUserId,
  }: ICreateTransactionDTO) {
    const loggedUser = await this.usersRepository.findById(loggedUserId)

    if (loggedUser.username === targetUsername) {
      throw new AppError('You cannot create a transaction to yourself!')
    }

    if (valueInCents > loggedUser.account.balance) {
      throw new AppError('Insufficient funds!')
    }

    const targetUser = await this.usersRepository.findByUsername(targetUsername)

    if (!targetUser) {
      throw new AppError('Target user not found!', 404)
    }

    const loggedBalance = loggedUser.account.balance - valueInCents
    const targetBalance = targetUser.account.balance + valueInCents

    const updatedLoggedAccountUser = await this.accountsRepository.update({
      id: loggedUser.account.id,
      balance: loggedBalance,
      userId: loggedUser.id,
    })

    await this.accountsRepository.update({
      id: targetUser.account.id,
      balance: targetBalance,
      userId: targetUser.id,
    })

    const transaction = await this.transactionsRepository.create({
      debitedAccountId: loggedUser.account.id,
      creditedAccountId: targetUser.account.id,
      value: valueInCents,
    })

    return {
      account: {
        balance: updatedLoggedAccountUser.balance,
      },
      transaction,
    }
  }
}
