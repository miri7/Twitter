const http = require('http');
const app = require('./server')
const database = require('./server/database');

const {database:{protocol,url,username,password},port} =  require('./server/config');

//database
database.connect({
  protocol,
  url,
  username,
  password,
})
//webserver
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`El servidor se está ejecutando en ${port}`);
});