// Require the framework and instantiate it

// CommonJs
const fastify = require('fastify')({
  logger: true
})

const pgp = require('pg-promise')();
 
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'kp_test',
  user: 'laila',
  password: 'test1234'
});

// Declare a route for example
fastify.get('/', function (request, reply) {
  reply.send('method get')
})
fastify.post('/', function (request, reply) {
    reply.send('method post')
})

//get list semua buku bisa search by judul
fastify.get('/buku', async function (request, reply) {
    const buku = await db.query("SELECT * FROM buku WHERE judul ilike $1", [`%${request.query.search}%`])
    return buku;
})  

//get detail buku by id (get with param id)
fastify.get('/buku/:id', async function (request, reply) {
    const buku = await db.query("SELECT * FROM buku WHERE id = $1", [`${request.params.id}`])
    return buku;
    //reply.send('method post')
}) 


//insert buku

//update/edit stock buku by id
//id lewat param, stock=body

//hapus buku by id

fastify.post('/buku', async function (request, reply) {
    const buku = await db.query("select * from buku where judul ilike $1", [`%${request.body.search}%`])
    return buku;
    //reply.send('method post')
  })  

  

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})