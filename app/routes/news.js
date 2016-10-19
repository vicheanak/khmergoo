'use strict';
var cors = require('cors');
var news = require('../../app/controllers/news');

module.exports = function(app) {

app.options('/news/:id', cors());
app.route('/news/:id')
    .get(cors(), news.get);

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

app.options('/cen', cors());
app.route('/cen')
    .get(cors(), news.all);

app.options('/kampucheathmey', cors());
app.route('/kampucheathmey')
    .get(cors(), news.all);

app.options('/vod', cors());
app.route('/vod')
    .get(cors(), news.all);

app.options('/camnews', cors());
app.route('/camnews')
    .get(cors(), news.all);

app.options('/phnompenhpost', cors());
app.route('/phnompenhpost')
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

app.options('/api/cen', cors());
app.route('/api/cen')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/kampucheathmey', cors());
app.route('/api/kampucheathmey')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/vod', cors());
app.route('/api/vod')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/camnews', cors());
app.route('/api/camnews')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api/phnompenhpost', cors());
app.route('/api/phnompenhpost')
    .post(cors(), news.isAuth, news.allApi);

app.options('/api', cors());
app.route('/api')
    .post(cors(), news.isAuth, news.allApi);

};
