var vertx = require('vertx.js');

var httpServer = vertx.createHttpServer();

var sockJSServer = vertx.createSockJSServer(httpServer);

sockJSServer.bridge({prefix : '/eventbus'}, [{}], [{}] );

httpServer.listen(vertx.getConfig().port, vertx.getConfig().host);
