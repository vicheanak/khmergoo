'use strict';

var StandardError = require('standard-error');
var db = require('../../config/sequelize');


exports.all = function(req, res) {
    db.Article.findAll().then(function(articles){
        return res.jsonp(articles);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
