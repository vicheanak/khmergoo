'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');


exports.render = function(req, res) {
    res.render('index', {
        content: 'My Content',
        secondContent: 'Second Content'
    });
};
