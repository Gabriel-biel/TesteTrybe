import { Request, Response } from 'express'
import { container } from 'tsyringe'
import validateParams from '../../../../utils/validateParams'
import { IAuthenticateUserDTO } from '../../dtos/UsersDTO'
import { authenticateUserSchema } from '../../schemas/userSchemas'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    validateParams<IAuthenticateUserDTO>(
      { username, password },
      authenticateUserSchema,
    )

    const authenticateUser = container.resolve(AuthenticateUserUseCase)

    const { token, user } = await authenticateUser.execute({
      username,
      password,
    })

    return response.json({ token, user })
  }
}
