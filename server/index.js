const jsonServer = require("json-server");//import json server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;//you can use any port number

server.use(middlewares);
server.use(router);


server.listen(port);