import app from './app'

const PORT = 3000

// eslint-disable-next-line no-console
const server = app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default server
