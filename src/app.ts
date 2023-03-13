import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify({ logger: false })

app.register(fastifyCookie)

app.addHook('preHandler', async (request) => {
  console.log('\x1b[42m%s\x1b[0m', `- [${request.method}] ${request.url}`)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
