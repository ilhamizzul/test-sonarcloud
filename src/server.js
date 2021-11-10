const Hapi = require('hapi');
const routes = require('./routes');
const config = require('../config');

const init = async () => {
    const server = Hapi.server({
        port: config.PORT,
        host: config.HOST,
    });
    server.route(routes);

    await server.start();
    console.log(`NODE_ENV=${config.NODE_ENV}`);
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();