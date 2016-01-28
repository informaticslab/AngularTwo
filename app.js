var express = require('express');
var app = express();
var path = require('./server/config/path');

require('./server/config/express')(app, path, express);

require('./server/config/routes.js')(app);



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});