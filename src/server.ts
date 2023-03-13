import { app } from './app'
import { env } from './env'

const start = async () => {
  try {
    await app.listen({ port: env.PORT })
    console.log('App running...')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
