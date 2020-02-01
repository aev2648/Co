const http = require('http');
const htmlHandler = require('.html')
const wearables = require('./Wearable.js');
const connections = require('./Connections.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/getConnections':
      connections.getConnections(request, response);
      break;
    case '/getWearables':
      wearables.getWearables(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.01: ${port}`);