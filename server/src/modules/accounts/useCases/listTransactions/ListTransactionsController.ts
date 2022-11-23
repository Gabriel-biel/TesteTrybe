import { Request, Response } from 'express'
import { container } from 'tsyringe'
import validateParams from '../../../../utils/validateParams'
import { listTransactionsSchema } from '../../schemas/accountSchemas'
import { ListTransactionsUseCase } from './ListTransactionsUseCase'

interface IQuery {
  type?: 'cash_in' | 'cash_out'
  date?: string
}

export class ListTransactionsController {
  async handle(request: Request, response: Response) {
    const { type, date } = request.query as IQuery

    const { user_id } = request

    validateParams({ type, user_id, date }, listTransactionsSchema)

    const listTransactions = container.resolve(ListTransactionsUseCase)

    const transactions = await listTransactions.execute({ type, user_id, date })

    return response.json(transactions)
  }
}
