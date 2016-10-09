'use strict';

var StandardError = require('standard-error');
var db = require('../../config/sequelize');
var winston = require('../../config/winston');

exports.all = function(req, res) {
    db.NewsCategory.findAll().then(function(categories){
        return res.render('index', {categories: categories});
    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
};

exports.items = function(req, res) {
    var page = parseInt(req.query.page);
    var limit = 10;
    var offset = isNaN(page) ? 0 : (page - 1) * limit;

    db.NewsArticle.findAndCountAll({
        where: {
            NewsCategoryId: req.params.NewsCategoryId
        },
        include: [
        {
            model:db.Website,
            attributes:['name']
        }],
        order: [['createdAt', 'DESC']],
        offset: offset,
        limit: limit
    }).then(function(items){
        return res.jsonp(items);
    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
};

exports.khmerNews = function(req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1;
    var limit = 20;
    var offset = isNaN(page) ? 0 : (page - 1) * limit;

    db.NewsArticle.findAndCountAll({
        where: {
            NewsCategoryId: 1
        },
        include: [
        {
            model:db.Website,
            attributes:['name']
        }],
        order: [['createdAt', 'DESC']],
        offset: offset,
        limit: limit
    }).then(function(items){
        var results = {
            total: items.count,
            items: items.rows,
            limit: limit,
            totalPages: Math.ceil(items.count / limit),
            slug: 'khmer-news',
            currentPage: page,
            title: 'ពត៌មានជាតិ'
        };
        return res.render('index', {"results": results});
    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
};

exports.internationalNews = function(req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1;
    var limit = 20;
    var offset = isNaN(page) ? 0 : (page - 1) * limit;

    db.NewsArticle.findAndCountAll({
        where: {
            NewsCategoryId: 2
        },
        include: [
        {
            model:db.Website,
            attributes:['name']
        }],
        order: [['createdAt', 'DESC']],
        offset: offset,
        limit: limit
    }).then(function(items){
        var results = {
            total: items.count,
            items: items.rows,
            limit: limit,
            totalPages: Math.ceil(items.count / limit),
            slug: 'international-news',
            title: 'ពត៌មានអន្តរជាតិ',
            currentPage: page
        };
        return res.render('index', {results: results});
    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
};
