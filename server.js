const http = require('http');
const app = require('./app');
const port = process.env.PORT_GATEWAY;
const server = http.createServer(app);
server.listen(port, ()=> console.log(`API Gateway started on port ${port}`));