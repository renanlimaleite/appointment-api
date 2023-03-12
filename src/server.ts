import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify({ logger: false })

app.register(fastifyCookie)

app.addHook('preHandler', async (request) => {
  console.log('\x1b[42m%s\x1b[0m', `- [${request.method}] ${request.url}`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

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
