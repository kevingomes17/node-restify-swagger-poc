var swaggerConverter = require('swagger-converter');

var resourceListing = require('./custom_apis/index.json');

var apiDeclarations = {
    '/swagger/echoName': require('./custom_apis/echo.json')
};

var swagger2Document = swaggerConverter.convert(resourceListing, apiDeclarations);

console.log(JSON.stringify(swagger2Document, null, 2));