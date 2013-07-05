require('vertx.js');

var eb = vertx.eventBus;

eb.registerHandler('test.address', function( message ) {
    eb.send('test.address', message);
});
