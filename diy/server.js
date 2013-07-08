var vertx = require('vertx.js');

var httpServer = vertx.createHttpServer();

var sockJSServer = vertx.createSockJSServer(httpServer);

sockJSServer.bridge({prefix : '/eventbus'}, [{}], [{}] );

httpServer.listen(vertx.env['OPENSHIFT_INTERNAL_PORT'], vertx.env['OPENSHIFT_INTERNAL_IP']);
