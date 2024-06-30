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
  
// GET LIST ALL BUKU
fastify.get('/buku/all', async function (request, reply) {
    const buku = await db.query("SELECT * FROM buku")
    return buku;
})  

//GET LIST BUKU SEARCH BY JUDUL
fastify.get('/buku', async function (request, reply) {
    const buku = await db.query("SELECT * FROM buku WHERE judul ilike $1", [`%${request.query.search}%`])
    return buku;
})  
  
//GET DETAIL BUKU BY ID
fastify.get('/buku/:id', async function (request, reply) {
    const buku = await db.query("SELECT * FROM buku WHERE id = $1", [`${request.params.id}`])
    return buku;
}) 
  
  
//INSERT NEW DATA BUKU
fastify.post('/buku/insert', async function (request, reply) {
  const { id, sku, judul, harga, stock } = request.body;
  const InsertBuku = await db.query("INSERT INTO buku (id, sku, judul, harga, stock) VALUES($1, $2, $3, $4, $5)", [id, sku, judul, harga, stock])
  return InsertBuku;
}) 
  
  
//UPDATE OR EDIT STOCK BUKU BY ID
fastify.put('/buku/:id', async function (request, reply) {
  const { stock } = request.body;
  const buku = await db.query("UPDATE buku SET stock = $2 WHERE id = $1", [`${request.params.id}`, stock])
  return buku;
}) 
  
//DELETE BUKU BY ID
fastify.delete('/buku/:id', async function (request, reply) {
  const buku = await db.query("DELETE FROM buku WHERE id = $1", [`${request.params.id}`])
  return buku;
}) 

  
// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})