import { inject, injectable } from 'tsyringe'
import { jwt } from '../../../../config/auth'

import { IHashProvider } from '../../../../shared/containers/providers/HashProvider/interfaces/IHashProvider'
import { ITokenProvider } from '../../../../shared/containers/providers/TokenProvider/Interfaces/ITokenProvider'
import { AppError } from '../../../../shared/errors/AppError'
import { IAuthenticateUserDTO } from '../../dtos/UsersDTO'
import { IUsersRepository } from '../../repositories/interfaces/IUsersRepository'

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRespository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
  ) {}

  async execute({ username, password }: IAuthenticateUserDTO) {
    const user = await this.usersRespository.findByUsername(username)

    if (!user) {
      throw new AppError('Username or password incorrect', 401)
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password,
    )

    if (!passwordMatch) {
      throw new AppError('Username or password incorrect', 401)
    }

    const token = this.tokenProvider.generate(user.id, jwt.auth_secret)

    return {
      token,
      user: {
        id: user.id,
        username: user.username,
      },
    }
  }
}
