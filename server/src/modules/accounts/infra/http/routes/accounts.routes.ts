import { Router } from 'express'
import { ensureAuthenticated } from '../../../../users/infra/http/middlewares/ensureAuthenticated'
import { CreateTransactionController } from '../../../useCases/createTransaction/CreateTransactionController'
import { GetBalanceController } from '../../../useCases/getBalance/GetBalanceController'
import { ListTransactionsController } from '../../../useCases/listTransactions/ListTransactionsController'

export const accountsRoutes = Router()

accountsRoutes.use(ensureAuthenticated)

accountsRoutes.get('/balance', new GetBalanceController().handle)
accountsRoutes.post(
  '/transaction/new',
  new CreateTransactionController().handle,
)
accountsRoutes.get('/transaction', new ListTransactionsController().handle)
