var restify = require('restify');

var os = require("os");
var hostname = os.hostname();

function respond(req, res, next) {
  res.send('server ' + hostname + ' says, hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});