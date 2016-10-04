'use strict';

var StandardError = require('standard-error');
var db = require('../../config/sequelize');

exports.article = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Article.find({where: {id: id}}).then(function(article){
        if(!article) {
            return next(new Error('Failed to load article ' + id));
        } else {
            req.article = article;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};


/**
 * Show an article
 */
exports.show = function(req, res) {
    // Sending down the article that was just preloaded by the articles.article function
    // and saves article on the req object.
    return res.jsonp(req.article);
};

/**
 * List of Articles
 */
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
