import { Account } from '@prisma/client'

export interface IAccountsRepository {
  update(account: Account): Promise<Account>
  findByUserId(userId: string): Promise<Account | null>
}
