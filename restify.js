var restify = require('restify');

function respond(req, res, next) {
  res.send('benchmarks for win');
  next();
}

var server = restify.createServer();

server.head('/', respond);

server.listen(7000);
