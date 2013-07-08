var vertx = require('vertx.js');

var httpServer = vertx.createHttpServer();

var sockJSServer = vertx.createSockJSServer(httpServer);

sockJSServer.bridge({prefix : '/eventbus'}, [{}], [{}] );

httpServer.listen(process.env['OPENSHIFT_INTERNAL_PORT'], process.env['OPENSHIFT_INTERNAL_IP']);
