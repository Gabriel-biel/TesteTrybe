import { Request, Response } from 'express'
import { container } from 'tsyringe'
import validateParams from '../../../../utils/validateParams'
import { getBalanceSchema } from '../../schemas/accountSchemas'

import { GetBalanceUseCase } from './GetBalanceUseCase'
export class GetBalanceController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    validateParams({ user_id }, getBalanceSchema)

    const getBalance = container.resolve(GetBalanceUseCase)

    const balance = await getBalance.execute(user_id)

    return response.json(balance)
  }
}
