'use strict';
var cors = require('cors');
var news = require('../../app/controllers/news');

module.exports = function(app) {

app.options('/kohsantepheap', cors());
app.route('/kohsantepheap')
    .get(cors(), news.all);

app.options('/rfa', cors());
app.route('/rfa')
    .get(cors(), news.all);

app.options('/voa', cors());
app.route('/voa')
    .get(cors(), news.all);

app.options('/thmeythmey', cors());
app.route('/thmeythmey')
    .get(cors(), news.all);

app.options('/freshnews', cors());
app.route('/freshnews')
    .get(cors(), news.all);

app.options('/dapnews', cors());
app.route('/dapnews')
    .get(cors(), news.all);


app.options('/', cors());
app.route('/')
    .get(cors(), news.all);

};
