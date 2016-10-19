'use strict';
var cors = require('cors');
var news = require('../../app/controllers/news');

module.exports = function(app) {

app.options('/news/:id');
app.route('/news/:id')
    .get(news.get);

app.options('/kohsantepheap');
app.route('/kohsantepheap')
    .get(news.all);

app.options('/rfa');
app.route('/rfa')
    .get(news.all);

app.options('/voa');
app.route('/voa')
    .get(news.all);

app.options('/thmeythmey');
app.route('/thmeythmey')
    .get(news.all);

app.options('/freshnews');
app.route('/freshnews')
    .get(news.all);

app.options('/dapnews');
app.route('/dapnews')
    .get(news.all);

app.options('/cen');
app.route('/cen')
    .get(news.all);

app.options('/kampucheathmey');
app.route('/kampucheathmey')
    .get(news.all);

app.options('/vod');
app.route('/vod')
    .get(news.all);

app.options('/camnews');
app.route('/camnews')
    .get(news.all);

app.options('/phnompenhpost');
app.route('/phnompenhpost')
    .get(news.all);

app.options('/');
app.route('/')
    .get(news.all);


app.options('/api/news/:id', cors());
app.route('/api/news/:id')
    .post(cors(),  news.isAuth, news.getApi);

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
