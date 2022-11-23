import joi from 'joi'
import { IAuthenticateUserDTO, ICreateUserDTO } from '../dtos/UsersDTO'

export const createUserSchema = joi.object<ICreateUserDTO>({
  username: joi.string().required().min(3),
  password: joi.string().min(8),
})

export const authenticateUserSchema = joi.object<IAuthenticateUserDTO>({
  username: joi.string().required().min(3),
  password: joi.string().min(8),
})
