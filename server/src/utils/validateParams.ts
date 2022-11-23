import joi from 'joi'
import { AppError } from '../shared/errors/AppError'

export default function validateParams<T>(params: T, schema: joi.ObjectSchema) {
  const validation = schema.validate(params)
  if (validation.error) {
    throw new AppError(validation.error.details[0].message)
  }
}
