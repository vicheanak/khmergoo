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


app.options('/api/kohsantepheap', cors());
app.route('/api/kohsantepheap')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/rfa', cors());
app.route('/api/rfa')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/voa', cors());
app.route('/api/voa')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/thmeythmey', cors());
app.route('/api/thmeythmey')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/freshnews', cors());
app.route('/api/freshnews')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/dapnews', cors());
app.route('/api/dapnews')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api', cors());
app.route('/api')
    .post(cors(), news.isAuth, news.allApi);

};
