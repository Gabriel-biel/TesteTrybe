import { Account, User } from '@prisma/client'
import { prisma } from '../../../../shared/infra/prisma'
import { ICreateUserDTO } from '../../dtos/UsersDTO'
import { IUsersRepository } from '../interfaces/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async create({ username, password }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        username,
        password,
        account: {
          create: {
            balance: 100 * 100, // 100 Reais
          },
        },
      },
    })

    return user
  }

  async findByUsername(
    username: string,
  ): Promise<(User & { account: Account }) | null> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        account: true,
      },
    })

    return user
  }

  async findById(id: string): Promise<(User & { account: Account }) | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        account: true,
      },
    })

    return user
  }
}
