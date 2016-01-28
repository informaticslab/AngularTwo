/**
 * Created by sanjithdavid on 1/27/16.
 */

'use strict';
var server = require('../controllers/server');

module.exports = function(app) {

    app.get('/api/hello/:id', server.sayHello);
    app.get('/api/hello', server.sayHello);


    app.get('/*', function (req, res) {
        //res.send('Hello World!');
        res.render('index')
    });
};
