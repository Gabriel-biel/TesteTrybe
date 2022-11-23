import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetUserUseCase } from './GetUserUseCase'

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const getUser = container.resolve(GetUserUseCase)

    const user = await getUser.execute(user_id)

    return response.json(user)
  }
}
