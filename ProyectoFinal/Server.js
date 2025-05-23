const http = require('http');
require('dotenv').config();
const connectDB = require('./config/db');
const routeRequest = require('./routes/jugueteRutas');

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  const server = http.createServer((req, res) => {
    routeRequest(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});