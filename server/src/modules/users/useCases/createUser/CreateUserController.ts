import { Request, Response } from 'express'
import validateParams from '../../../../utils/validateParams'
import { ICreateUserDTO } from '../../dtos/UsersDTO'
import { createUserSchema } from '../../schemas/userSchemas'

import { container } from 'tsyringe'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    validateParams<ICreateUserDTO>({ username, password }, createUserSchema)

    const createUser = container.resolve(CreateUserUseCase)
    const user = await createUser.execute({ username, password })

    return response.status(201).json(user)
  }
}
