const {parse} = require('url');
const{
    conseguirTodasRapidas,
    conseguirRapidaPorId,
    crearRapida,
    actualizarRapida,
    eliminarRapida
} = require('../Controllers/rapidasController');
const parseBody = require('../utils/parseBody');

async function routeRequest(req, res) {
    const parsedUrl = parse(req.url, true);
    const {pathname} = parsedUrl;
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

    // GET /rapidas
    if (method === 'GET' && pathname === '/rapidas') {
        const rapidas = await conseguirTodasRapidas();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(rapidas));
    }
    // GET /rapida/:id
    if (method === 'GET' && pathname.startsWith('/rapida/')) {
        const id = pathname.split('/')[2];
        const rapida = await conseguirRapidaPorId(id);
        if (!rapida) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Rápida no encontrada.' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(rapida));
        }
    }
    // POST /rapida
    if (method === 'POST' && pathname === '/rapida') {
        const body = await parseBody(req);
        const nuevaRapida = await crearRapida(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(nuevaRapida));
    }
    // PUT /rapida/:id
    if (method === 'PUT' && pathname.startsWith('/rapida/')) {
        const id = pathname.split('/')[2];
        const body = await parseBody(req);
        const actualizada = await actualizarRapida(id, body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(actualizada));
    }
    // DELETE /rapida/:id
    if (method === 'DELETE' && pathname.startsWith('/rapida/')) {
        const id = pathname.split('/')[2];
        const eliminada = await eliminarRapida(id);
        if (!eliminada) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ error: 'Rápida no encontrada.' }));
        } else {
            res.writeHead(204);
            return res.end();
        }
    }

    //404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Ruta no encontrada.' }));
}
module.exports = routeRequest;