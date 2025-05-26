const { parse } = require('url');
const {
  getAllalimento,
  getalimentoById,
  createAlimento,
  updateAlimento,
  deleteAlimento
} = require('../Controllers/mascotasController');
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

  // GET /alimentos
  if (method === 'GET' && pathname === '/alimento') {
    const shirts = await getAllalimento();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(shirts));
  }

  // GET /camisa/:id
  if (method === 'GET' && pathname.startsWith('/alimento/')) {
    const id = pathname.split('/')[2];
    const shirt = await getalimentoById(id);
    if (!shirt) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'alimento no encontrado.' }));
    }else{
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(shirt));
    }
  }

  // POST /camisa
  if (method === 'POST' && pathname === '/alimento') {
    const body = await parseBody(req);
    const newShirt = await createAlimento(body);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newShirt));
  }

  // PUT /camisa/:id
  if (method === 'PUT' && pathname.startsWith('/alimento/')) {
    const id = pathname.split('/')[2];
    const body = await parseBody(req);
    const updated = await updateAlimento(id, body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(updated));
  }

  // DELETE /camisa/:id
  if (method === 'DELETE' && pathname.startsWith('/alimento/')) {
    const id = pathname.split('/')[2];
  
    try {
      const resultado = await deleteAlimento(id);
  
      if (!resultado) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'alimento no encontrado.' }));
      }
  
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ mensaje: 'alimento eliminado correctamente.' }));
  
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Error al eliminar el alimento.' }));
    }
  }
  

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Route not found' }));
}

module.exports = routeRequest;
