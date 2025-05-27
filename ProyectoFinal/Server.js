const http = require('http');
require('dotenv').config();
const connectDB = require('./config/db');
const routeRequest = require('./routes/tiendaRutas');

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  const server = http.createServer((req, res) => {
    routeRequest(req, res); // Solo esta línea es necesaria
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
