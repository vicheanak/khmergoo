'use strict';

var StandardError = require('standard-error');
var db = require('../../config/sequelize');


exports.all = function(req, res) {
    db.TradeCategory.findAll().then(function(categories){
        return res.jsonp(categories);
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

    db.TradeItem.findAll({
        where: {
            TradeCategoryId: req.params.TradeCategoryId
        },
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

exports.houseForSale = function(req, res){
    db.TradeItem.findAll().then(function(items){
        return res.render('house-for-sale', {
            content: 'My Content',
            secondContent: 'Second Content'
        });
    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
}
