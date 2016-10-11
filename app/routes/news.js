'use strict';
var cors = require('cors');
var news = require('../../app/controllers/news');

module.exports = function(app) {

app.options('/news', cors());
app.route('/news')
    .get(cors(), news.all);
app.options('/news/:NewsCategoryId', cors());
app.route('/news/:NewsCategoryId')
    .get(cors(), news.items);
app.options('/khmer-news', cors());
app.route('/khmer-news')
    .get(cors(), news.khmerNews);
app.options('/khmer-news/more/:page', cors());
app.route('/khmer-news/more/:page')
    .get(cors(), news.moreKhmerNews);
app.options('/international-news', cors());
app.route('/international-news')
    .get(cors(), news.internationalNews);
app.options('/', cors());
app.route('/')
    .get(cors(), news.khmerNews);

};
