import { Account } from '@prisma/client'
import { prisma } from '../../../../shared/infra/prisma'
import { IAccountsRepository } from '../interfaces/IAccountsRepository'

export class AccountsRepository implements IAccountsRepository {
  async findByUserId(userId: string): Promise<Account> {
    const account = await prisma.account.findFirst({
      where: {
        userId,
      },
    })
    return account
  }

  async update(account: Account): Promise<Account> {
    const updatedAccount = await prisma.account.update({
      where: {
        id: account.id,
      },
      data: account,
    })

    return updatedAccount
  }
}
