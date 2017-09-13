var restify = require('restify'),
    restifySwagger = require('node-restify-swagger');
var restifyValidation = require('node-restify-validation');

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restifyValidation.validationPlugin({
    errorsAsArray: false,
}));
restifySwagger.configure(server, {
    description: 'Description of my API',
    title: 'Title of my API',
    allowMethodInModelNames: true
});

// server.get({
//     url: '/animals',
//     swagger: {
//         summary: 'Add animal',
//         docPath: 'zoo'
//     },
//     validation: {
//         name: { isRequired: true, isAlpha:true, scope: 'body' },
//         locations: { isRequired: true, type:'array', swaggerType: 'Location', scope: 'body' }
//     },
//     models: {
//         Location: {
//             id: 'Location',
//             properties: {
//                 name: { type: 'string' },
//                 continent: { type: 'string' }
//             }
//         },
//     }
// }, function (req, res, next) {
//     res.send(req.params);
// });

server.get({
   url: '/echo/:name',
    swagger: {
        summary: 'Display Name',
        docPath: 'echoName'
    },
    validation: { }
}, function(req, res, next) {
    res.send(req.params);
});

restifySwagger.loadRestifyRoutes();
server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});