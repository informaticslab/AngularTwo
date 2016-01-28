//var express = require('express');
var properties = require('./envProperties');

module.exports = function(app, path, express) {
    app.configure(function() {
        app.use('/',express.static(path.rootPath + '/public'));
        app.use('/node_modules',express.static(path.rootPath + '/node_modules'));
        app.set('views', path.rootPath+'/public')
        //app.use('pp', config.rootPath + '/public/app');
        app.set('view engine', 'jade');

    });
}