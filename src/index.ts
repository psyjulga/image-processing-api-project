import express, { Application } from 'express'

import apiRouter from './routes/apiRouter'

const app: Application = express()

/* ROUTES */
app.use('/api/images', apiRouter)

/* LISTENING */
const PORT = 3000

// eslint-disable-next-line no-console
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app
