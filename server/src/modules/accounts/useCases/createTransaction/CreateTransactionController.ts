import { Request, Response } from 'express'
import { container } from 'tsyringe'
import validateParams from '../../../../utils/validateParams'
import { createTransactionSchema } from '../../schemas/accountSchemas'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'

export class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { valueInCents, targetUsername } = request.body

    const { user_id: loggedUserId } = request

    validateParams(
      { valueInCents, targetUsername, loggedUserId },
      createTransactionSchema,
    )

    const createTransaction = container.resolve(CreateTransactionUseCase)

    const newTransaction = await createTransaction.execute({
      valueInCents,
      targetUsername,
      loggedUserId,
    })

    return response.status(201).json(newTransaction)
  }
}
