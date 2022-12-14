import { NextFunction, Request, Response } from 'express'
import { AppError } from './AppError'

export async function asyncErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  console.log(err)
  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  })
}
