import { Router } from 'express'
import { AuthenticateUserController } from '../../../../users/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '../../../../users/useCases/createUser/CreateUserController'
import { GetUserController } from '../../../useCases/getUser/GetUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

export const usersRoutes = Router()

usersRoutes.post('/', new CreateUserController().handle)
usersRoutes.post('/authenticate', new AuthenticateUserController().handle)
usersRoutes.get('/', ensureAuthenticated, new GetUserController().handle)
