const { parse } = require('url');
const parseBody = require('../utils/parseBody');

const {
  getAllShirts, getShirtById, createShirt, updateShirt, deleteShirt,
  getAllalimento, getalimentoById, createAlimento, updateAlimento, deleteAlimento,
  getAllBebida, getBebidaById, createBebida, updateBebida, deleteBebida,
  getAllProductos, getProductoById, createProducto, updateProducto, deleteProducto,
  getAllJugetes, getJugetesById, createJugetes, updateJugetes, deleteJugetes,
  getAllRapidas, getRapidaById, createRapida, updateRapida, deleteRapida
} = require('../Controllers/tiendaController');

async function routeRequest(req, res) {
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;
  const method = req.method;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const sendJson = (code, data) => {
    res.writeHead(code, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  };

  const idFromPath = (path) => path.split('/')[2];

  // === CAMISAS ===
  if (method === 'GET' && pathname === '/camisas') return sendJson(200, await getAllShirts());
  if (method === 'GET' && pathname.startsWith('/camisa/')) {
    const result = await getShirtById(idFromPath(pathname));
    return result ? sendJson(200, result) : sendJson(404, { error: 'Camisa no encontrada' });
  }
  if (method === 'POST' && pathname === '/camisa') {
    try {
      const data = await parseBody(req);
      return sendJson(201, await createShirt(data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'PUT' && pathname.startsWith('/camisa/')) {
    try {
      const data = await parseBody(req);
      return sendJson(200, await updateShirt(idFromPath(pathname), data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'DELETE' && pathname.startsWith('/camisa/')) {
    const deleted = await deleteShirt(idFromPath(pathname));
    return deleted ? sendJson(200, { mensaje: 'Camisa eliminada correctamente' }) : sendJson(404, { error: 'Camisa no encontrada' });
  }

  // === ALIMENTOS ===
  if (method === 'GET' && pathname === '/alimentos') return sendJson(200, await getAllalimento());
  if (method === 'GET' && pathname.startsWith('/alimento/')) {
    const result = await getalimentoById(idFromPath(pathname));
    return result ? sendJson(200, result) : sendJson(404, { error: 'Alimento no encontrado' });
  }
  if (method === 'POST' && pathname === '/alimento') {
    try {
      const data = await parseBody(req);
      return sendJson(201, await createAlimento(data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'PUT' && pathname.startsWith('/alimento/')) {
    try {
      const data = await parseBody(req);
      return sendJson(200, await updateAlimento(idFromPath(pathname), data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'DELETE' && pathname.startsWith('/alimento/')) {
    const deleted = await deleteAlimento(idFromPath(pathname));
    return deleted ? sendJson(200, { mensaje: 'Alimento eliminado correctamente' }) : sendJson(404, { error: 'Alimento no encontrado' });
  }

  // === BEBIDAS ===
  if (method === 'GET' && pathname === '/bebidas') return sendJson(200, await getAllBebida());
  if (method === 'GET' && pathname.startsWith('/bebida/')) {
    const result = await getBebidaById(idFromPath(pathname));
    return result ? sendJson(200, result) : sendJson(404, { error: 'Bebida no encontrada' });
  }
  if (method === 'POST' && pathname === '/bebida') {
    try {
      const data = await parseBody(req);
      return sendJson(201, await createBebida(data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'PUT' && pathname.startsWith('/bebida/')) {
    try {
      const data = await parseBody(req);
      return sendJson(200, await updateBebida(idFromPath(pathname), data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'DELETE' && pathname.startsWith('/bebida/')) {
    const deleted = await deleteBebida(idFromPath(pathname));
    return deleted ? sendJson(200, { mensaje: 'Bebida eliminada correctamente' }) : sendJson(404, { error: 'Bebida no encontrada' });
  }

  // === PRODUCTOS ===
  if (method === 'GET' && pathname === '/productos') return sendJson(200, await getAllProductos());
  if (method === 'GET' && pathname.startsWith('/producto/')) {
    const result = await getProductoById(idFromPath(pathname));
    return result ? sendJson(200, result) : sendJson(404, { error: 'Producto no encontrado' });
  }
  if (method === 'POST' && pathname === '/producto') {
    try {
      const data = await parseBody(req);
      return sendJson(201, await createProducto(data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'PUT' && pathname.startsWith('/producto/')) {
    try {
      const data = await parseBody(req);
      return sendJson(200, await updateProducto(idFromPath(pathname), data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'DELETE' && pathname.startsWith('/producto/')) {
    const deleted = await deleteProducto(idFromPath(pathname));
    return deleted ? sendJson(200, { mensaje: 'Producto eliminado correctamente' }) : sendJson(404, { error: 'Producto no encontrado' });
  }

  // === JUGUETES ===
  if (method === 'GET' && pathname === '/juguetes') return sendJson(200, await getAllJugetes());
  if (method === 'GET' && pathname.startsWith('/juguete/')) {
    const result = await getJugetesById(idFromPath(pathname));
    return result ? sendJson(200, result) : sendJson(404, { error: 'Juguete no encontrado' });
  }
  if (method === 'POST' && pathname === '/juguete') {
    try {
      const data = await parseBody(req);
      return sendJson(201, await createJugetes(data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'PUT' && pathname.startsWith('/juguete/')) {
    try {
      const data = await parseBody(req);
      return sendJson(200, await updateJugetes(idFromPath(pathname), data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'DELETE' && pathname.startsWith('/juguete/')) {
    const deleted = await deleteJugetes(idFromPath(pathname));
    return deleted ? sendJson(200, { mensaje: 'Juguete eliminado correctamente' }) : sendJson(404, { error: 'Juguete no encontrado' });
  }

  // === RAPIDAS ===
  if (method === 'GET' && pathname === '/rapidas') return sendJson(200, await getAllRapidas());
  if (method === 'GET' && pathname.startsWith('/rapida/')) {
    const result = await getRapidaById(idFromPath(pathname));
    return result ? sendJson(200, result) : sendJson(404, { error: 'Comida rápida no encontrada' });
  }
  if (method === 'POST' && pathname === '/rapida') {
    try {
      const data = await parseBody(req);
      return sendJson(201, await createRapida(data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'PUT' && pathname.startsWith('/rapida/')) {
    try {
      const data = await parseBody(req);
      return sendJson(200, await updateRapida(idFromPath(pathname), data));
    } catch (error) {
      return sendJson(400, { error: error.message });
    }
  }
  if (method === 'DELETE' && pathname.startsWith('/rapida/')) {
    const deleted = await deleteRapida(idFromPath(pathname));
    return deleted ? sendJson(200, { mensaje: 'Comida rápida eliminada correctamente' }) : sendJson(404, { error: 'Comida rápida no encontrada' });
  }

  // === 404 FINAL ===
  return sendJson(404, { message: 'Route not found' });
}

module.exports = routeRequest;
