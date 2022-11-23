import 'reflect-metadata'
import cors from 'cors'

import express from 'express'
import 'express-async-errors'
import { asyncErrors } from '../../errors/asyncErros'

import '../prisma'
import '../../containers'

import { appRoutes } from './routes'

const app = express()

app.use(cors())

app.use(express.json())

app.use(appRoutes)

app.use(asyncErrors)

app.listen(3333, () => console.log('Server Running on port 3333'))
