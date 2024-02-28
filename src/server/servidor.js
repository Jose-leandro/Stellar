const fastify = require('fastify')({ logger: true })

fastify.listen(3000, (err, address) => {
  if (err) throw err
  fastify.log.info('Servidor ouvindo em http://localhost:3000')
})
