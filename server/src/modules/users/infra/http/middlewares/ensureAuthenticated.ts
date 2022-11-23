import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import { jwt } from '../../../../../config/auth'
import { AppError } from '../../../../../shared/errors/AppError'
import { UsersRepository } from '../../../repositories/implementations/UsersRepository'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token is Missing!', 401)
  }

  const [, token] = authHeader.split(' ')

  const { auth_secret } = jwt

  try {
    const { sub: userId } = verify(token, auth_secret) as IPayload
    const usersRepository = new UsersRepository()
    const user = await usersRepository.findById(userId)

    if (!user) {
      throw new AppError('User does not Exists!', 401)
    }

    request.user_id = userId

    next()
  } catch {
    throw new AppError('Invalid Token!', 401)
  }
}
