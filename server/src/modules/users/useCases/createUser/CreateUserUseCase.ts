import { inject, injectable } from 'tsyringe'
import { IHashProvider } from '../../../../shared/containers/providers/HashProvider/interfaces/IHashProvider'
import { AppError } from '../../../../shared/errors/AppError'
import { ICreateUserDTO } from '../../dtos/UsersDTO'
import { IUsersRepository } from '../../repositories/interfaces/IUsersRepository'

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ username, password }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByUsername(
      username,
    )

    if (userAlreadyExists) {
      throw new AppError('this username is already in use')
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.usersRepository.create({
      username,
      password: hashedPassword,
    })

    return {
      id: user.id,
      username: user.username,
    }
  }
}
