import { Router } from 'express'
import { accountsRoutes } from '../../../../modules/accounts/infra/http/routes/accounts.routes'
import { usersRoutes } from '../../../../modules/users/infra/http/routes/users.routes'

export const appRoutes = Router()

appRoutes.use('/users', usersRoutes)
appRoutes.use('/accounts', accountsRoutes)
