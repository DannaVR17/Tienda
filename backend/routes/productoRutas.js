const { parse } = require('url');
const {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productoController');
const parseBody = require('../utils/parseBody');

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

  if (method === 'GET' && pathname === '/productos') {
    const productos = await getAllProductos();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(productos));
  }

  if (method === 'GET' && pathname.startsWith('/producto/')) {
    const id = pathname.split('/')[2];
    const producto = await getProductoById(id);
    if (!producto) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Producto no encontrado.' }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(producto));
  }

  if (method === 'POST' && pathname === '/producto') {
    const body = await parseBody(req);
    const nuevo = await createProducto(body);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(nuevo));
  }

  if (method === 'PUT' && pathname.startsWith('/producto/')) {
    const id = pathname.split('/')[2];
    const body = await parseBody(req);
    const actualizado = await updateProducto(id, body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(actualizado));
  }

  if (method === 'DELETE' && pathname.startsWith('/producto/')) {
    const id = pathname.split('/')[2];
    const resultado = await deleteProducto(id);

    if (!resultado) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Producto no encontrado.' }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ mensaje: 'Producto eliminado correctamente.' }));
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ mensaje: 'Ruta no encontrada' }));
}

module.exports = routeRequest;
