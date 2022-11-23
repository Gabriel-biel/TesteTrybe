import joi from 'joi'

export const getBalanceSchema = joi.object({
  user_id: joi.string().required(),
})

export const createTransactionSchema = joi.object({
  valueInCents: joi.number().required(),
  targetUsername: joi.string().required(),
  loggedUserId: joi.string().required(),
})

export const listTransactionsSchema = joi.object({
  type: joi.string().allow(null, '', 'cash_in', 'cash_out'),
  user_id: joi.string().required().uuid(),
  date: joi.date().allow(null, ''),
})
