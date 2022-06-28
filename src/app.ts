import apiRouter from './routes/apiRouter'
import express, { Application } from 'express'

const app: Application = express()

app.use('/api/images', apiRouter)

export default app
