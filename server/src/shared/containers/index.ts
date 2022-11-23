import './providers'

import { container } from 'tsyringe'
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository'
import { TransactionsRepository } from '../../modules/accounts/repositories/implementations/TransactionsRepository'
import { AccountsRepository } from '../../modules/accounts/repositories/implementations/AccountsRepository'

container.registerSingleton('UsersRepository', UsersRepository)
container.registerSingleton('TransactionsRepository', TransactionsRepository)
container.registerSingleton('AccountsRepository', AccountsRepository)
