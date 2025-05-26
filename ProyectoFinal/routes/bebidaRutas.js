const { parse } = require('url');
const {
  getAllBebida,
  getBebidaById,
  createBebida,
  updateBebida,
  deleteBebida
} = require('../Controllers/bebidaController');
const parseBody = require('../utils/parseBody');

async function routeRequest(req, res) {
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;
  const method = req.method;

  // ✅ Agregar headers CORS para todas las respuestas
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // ✅ Manejo de preflight request (OPTIONS)
  if (method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // GET /camisas
  if (method === 'GET' && pathname === '/bebidas') {
    const bebida = await getAllBebida();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(bebida));
  }

  // GET /camisa/:id
  if (method === 'GET' && pathname.startsWith('/bebida/')) {
    const id = pathname.split('/')[2];
    const bebida = await getBebidaById(id);
    if (!bebida) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Bebida no encontrada.' }));
    }else{
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(bebida));
    }
  }

  // POST /camisa
  if (method === 'POST' && pathname === '/bebida') {
    const body = await parseBody(req);
    const newbebida = await createBebida(body);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newbebida));
  }

  // PUT /camisa/:id
  if (method === 'PUT' && pathname.startsWith('/bebida/')) {
    const id = pathname.split('/')[2];
    const body = await parseBody(req);
    const updated = await updateBebida(id, body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(updated));
  }

  // DELETE /camisa/:id
  if (method === 'DELETE' && pathname.startsWith('/bebida/')) {
    const id = pathname.split('/')[2];
  
    try {
      const resultado = await deleteBebida(id);
  
      if (!resultado) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Bebida no encontrada.' }));
      }
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ mensaje: 'Bebida eliminada correctamente.' }));
  
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Error al eliminar la bebida.' }));
    }
  }
  

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
}

module.exports = routeRequest;
