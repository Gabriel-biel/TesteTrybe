import { Account, User } from '@prisma/client'
import { ICreateUserDTO } from '../../dtos/UsersDTO'

export interface IUsersRepository {
  findByUsername(
    username: string,
  ): Promise<(User & { account: Account }) | null>
  create(data: ICreateUserDTO): Promise<User>
  findById(id: string): Promise<(User & { account: Account }) | null>
}
