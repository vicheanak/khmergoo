'use strict';

var trades = require('../../app/controllers/trades');

module.exports = function(app) {

app.route('/trades')
    .get(trades.all);
app.route('/trades/:TradeCategoryId')
    .get(trades.items);
app.route('/house-for-sale')
	.get(trades.houseForSale);

};
