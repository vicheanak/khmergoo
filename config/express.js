'use strict';

/**
 * Module dependencies.
 */
 var express = require('express');
 var helpers = require('view-helpers');
 var compression = require('compression');
 var logger = require('morgan');
 var cookieParser = require('cookie-parser');
 var bodyParser = require('body-parser');
 var methodOverride = require('method-override');
 var path = require('path');
 var config = require('./config');
 var winston = require('./winston');
 var compass = require('node-compass');

 module.exports = function(app) {

    winston.info('Initializing Express');

    app.set('showStackError', true);

    //Prettify HTML
    app.locals.pretty = true;

    //Should be placed before express.static
    app.use(compression({
        filter: function(req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));



    //Don't use logger for test env
    if (config.NODE_ENV !== 'test') {
        app.use(logger('dev', { "stream": winston.stream }));
    }

    //Set views path, template engine and default layout
    app.set('view engine', 'pug');
    app.set('views', config.root + '/app/views');


    //Enable jsonp
    app.enable("jsonp callback");


    app.use(compass({
        comments: true,
        project: config.root + '/public',
        css: config.root + '/public/stylesheets',
        sass: config.root + '/sass',
        cache: false,
        logging: true
    }));


    app.use(express.static(config.root + '/public'));


    // request body parsing middleware should be above methodOverride
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());



    //dynamic helpers
    app.use(helpers(config.app.name));


    // Globbing routing files
    config.getGlobbedFiles('./app/routes/**/*.js').forEach(function(routePath) {
      require(path.resolve(routePath))(app);
  });

    // app.get('*',  function (req, res, next) {
    //     res.render('index');
    // });

    app.use('*',function(req, res){
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });

    app.use(function(err, req, res, next) {

        //Log it
        winston.error(err);

        //Error page
        res.status(500).render('500', {
            error: err.stack
        });
    });

    app.locals.moment = require('moment');

};
