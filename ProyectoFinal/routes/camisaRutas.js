const { parse } = require('url');
const {
  getAllShirts,
  getShirtById,
  createShirt,
  updateShirt,
  deleteShirt
} = require('../Controllers/camisaController');
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
  if (method === 'GET' && pathname === '/camisas') {
    const shirts = await getAllShirts();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(shirts));
  }

  // GET /camisa/:id
  if (method === 'GET' && pathname.startsWith('/camisa/')) {
    const id = pathname.split('/')[2];
    const shirt = await getShirtById(id);
    if (!shirt) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Camisa no encontrada.' }));
    }else{
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(shirt));
    }
  }

  // POST /camisa
  if (method === 'POST' && pathname === '/camisa') {
    const body = await parseBody(req);
    const newShirt = await createShirt(body);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newShirt));
  }

  // PUT /camisa/:id
  if (method === 'PUT' && pathname.startsWith('/camisa/')) {
    const id = pathname.split('/')[2];
    const body = await parseBody(req);
    const updated = await updateShirt(id, body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(updated));
  }

  // DELETE /camisa/:id
  if (method === 'DELETE' && pathname.startsWith('/camisa/')) {
    const id = pathname.split('/')[2];
  
    try {
      const resultado = await deleteShirt(id);
  
      if (!resultado) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Camisa no encontrada.' }));
      }
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ mensaje: 'Camisa eliminada correctamente.' }));
  
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Error al eliminar la camisa.' }));
    }
  }
  

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
}

module.exports = routeRequest;
