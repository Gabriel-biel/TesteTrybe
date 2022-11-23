import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError'
import { UsersRepository } from '../../repositories/implementations/UsersRepository'

@injectable()
export class GetUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute(user_id: string) {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new AppError('User not found!', 404)
    }

    return {
      user: {
        id: user.id,
        username: user.username,
        account: {
          balance: user.account.balance,
        },
      },
    }
  }
}
