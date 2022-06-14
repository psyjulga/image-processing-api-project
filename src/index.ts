import express, { Application } from 'express'

import exampleRouter from './routes/example'

const app: Application = express()

/* ROUTES */
app.use('/example', exampleRouter)

/* LISTENING */
const PORT = 4000
// eslint-disable-next-line no-console
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app
