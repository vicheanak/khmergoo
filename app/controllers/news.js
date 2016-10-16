'use strict';

var StandardError = require('standard-error');
var db = require('../../config/sequelize');
var winston = require('../../config/winston');
var moment = require('moment');
require("moment-duration-format");

exports.isAuth = function(req, res, next){
    var token = req.headers.authorization;
    var value = '04;oCMQmit>Q8_LxYg4<BS6x%8eX$F7z4d1cl:a0h5CIr9Q!}a2O+6W@Ho5dM@';
    if (token == value){
        next();
    }
    else{
        return res.jsonp({error: 'no access'});
    }
}

exports.allApi = function(req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1;
    var limit = 20;
    var offset = isNaN(page) ? 0 : (page - 1) * limit;
    var now = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    var yesterday = moment().utc().add(-1, 'days').format("YYYY-MM-DD HH:mm:ss");

    var website = {
        model: db.Website,
        attributes: ['name']
    }

    var websiteId = '';
    var title = 'ពត៌មានជាតិ';
    if (req.path == '/api/kohsantepheap'){
        websiteId = 1;
        title = 'កោះសន្តិភាព';
    }
    if (req.path == '/api/dapnews'){
        websiteId = 2;
        title = 'ដើមអម្ពិល'
    }
    if (req.path == '/api/thmeythmey'){
        websiteId = 3;
        title = 'ថ្មីថ្មី';
    }
    if (req.path == '/api/voa'){
        websiteId = 4;
        title = 'វីអូអេ';
    }
    if (req.path == '/api/rfa'){
        websiteId = 10;
        title = 'អាសីុសេរី';
    }
    if (req.path == '/api/freshnews'){
        websiteId = 12;
        title = 'Fresh News';
    }
    if (req.path == '/api/cen'){
        websiteId = 11;
        title = 'CEN'
    }
    if (req.path == '/api/kampucheathmey'){
        websiteId = 5;
        title = 'កម្ពុជាថ្មី';
    }
    if (req.path == '/api/vod'){
        websiteId = 13;
        title = 'VOD';
    }
    if (req.path == '/api/camnews'){
        websiteId = 8;
        title = 'Cam News';
    }
    if (req.path == '/api/phnompenhpost'){
        websiteId = 7;
        title = 'ភ្នំពេញ ប៉ុស្តិ';
    }

    if (req.path != '/api' && req.path != '/api/')
        website['where'] = {"id": websiteId}

    var params = {
        include: [
        website,{
            model: db.NewsCategory,
            attributes:['name'],
            where: {
                id: 1
            }
        }],
        order: [['id', 'DESC']],
        offset: offset,
        limit: limit
    };


    db.NewsArticle.findAndCountAll(params).then(function(items){

        for (var i = 0; i < items.rows.length; i ++){
            var itemCreatedAt = moment(items.rows[i].createdAt).utc().format("DD/MM/YYYY HH:mm:ss");
            var current = moment().format("DD/MM/YYYY HH:mm:ss");
            var minutes = moment(current,"DD/MM/YYYY HH:mm:ss").diff(moment(itemCreatedAt,"DD/MM/YYYY HH:mm:ss"), 'minutes');

            var postedDate = moment.duration(minutes, 'minutes').format("d[ថ្ងៃ] h[ម៉ោង] m[នាទី] មុន");

            items.rows[i]['postedDate'] = postedDate;
        }

        var results = {
            total: items.count,
            items: items.rows,
            limit: limit,
            totalPages: Math.ceil(items.count / limit),
            slug: req.path,
            currentPage: page,
            title: title,
        };

        return res.jsonp(items.rows);

    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
};


exports.all = function(req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1;
    var limit = 20;
    var offset = isNaN(page) ? 0 : (page - 1) * limit;
    var now = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    var yesterday = moment().utc().add(-1, 'days').format("YYYY-MM-DD HH:mm:ss");

    var website = {
        model: db.Website,
        attributes: ['name']
    }

    var websiteId = '';
    var title = 'ពត៌មានជាតិ';
    if (req.path == '/kohsantepheap'){
        websiteId = 1;
        title = 'កោះសន្តិភាព';
    }
    if (req.path == '/dapnews'){
        websiteId = 2;
        title = 'ដើមអម្ពិល'
    }
    if (req.path == '/thmeythmey'){
        websiteId = 3;
        title = 'ថ្មីថ្មី';
    }
    if (req.path == '/voa'){
        websiteId = 4;
        title = 'វីអូអេ';
    }
    if (req.path == '/rfa'){
        websiteId = 10;
        title = 'អាសីុសេរី';
    }
    if (req.path == '/freshnews'){
        websiteId = 12;
        title = 'Fresh News';
    }
    if (req.path == '/cen'){
        websiteId = 11;
        title = 'CEN'
    }
    if (req.path == '/kampucheathmey'){
        websiteId = 5;
        title = 'កម្ពុជាថ្មី';
    }
    if (req.path == '/vod'){
        websiteId = 13;
        title = 'VOD';
    }
    if (req.path == '/camnews'){
        websiteId = 8;
        title = 'Cam News';
    }
    if (req.path == '/phnompenhpost'){
        websiteId = 7;
        title = 'ភ្នំពេញ ប៉ុស្តិ';
    }

    if (req.path != '/')
        website['where'] = {"id": websiteId}

    var params = {
        include: [
        website,{
            model: db.NewsCategory,
            attributes:['name'],
            where: {
                id: 1
            }
        }],
        order: [['id', 'DESC']],
        offset: offset,
        limit: limit
    };


    db.NewsArticle.findAndCountAll(params).then(function(items){

        for (var i = 0; i < items.rows.length; i ++){
            var itemCreatedAt = moment(items.rows[i].createdAt).utc().format("DD/MM/YYYY HH:mm:ss");
            var current = moment().format("DD/MM/YYYY HH:mm:ss");
            var minutes = moment(current,"DD/MM/YYYY HH:mm:ss").diff(moment(itemCreatedAt,"DD/MM/YYYY HH:mm:ss"), 'minutes');

            var postedDate = moment.duration(minutes, 'minutes').format("d[ថ្ងៃ] h[ម៉ោង] m[នាទី] មុន");

            items.rows[i]['postedDate'] = postedDate;
        }

        var results = {
            total: items.count,
            items: items.rows,
            limit: limit,
            totalPages: Math.ceil(items.count / limit),
            slug: req.path,
            currentPage: page,
            title: title,
        };



        if (req.query.page){
            return res.render('more-khmer-news', {"results": results})
        }
        return res.render('index', {"results": results});


    }).catch(function(err){
        return res.render('500', {
            error: err,
            status: 500
        });
    });
};


