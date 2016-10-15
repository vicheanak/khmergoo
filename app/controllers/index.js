'use strict';

var _ = require('lodash');

exports.render = function(req, res) {
	res.render('index', {
		content: 'My Content',
		secondContent: 'Second Content'
	});
};
