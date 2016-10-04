'use strict';


var articles = require('../../app/controllers/articles');

module.exports = function(app) {
// Article Routes
app.route('/articles')
    .get(articles.all);
app.route('/articles/:articleId')
    .get(articles.show);

// Finish with setting up the articleId param
// Note: the articles.article function will be called everytime then it will call the next function.
app.param('articleId', articles.article);
};

