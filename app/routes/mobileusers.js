'use strict';
console.log('Route');
var cors = require('cors');
var mobileusers = require('../../app/controllers/mobileusers');

module.exports = function(app) {
	app.options('/push', cors());
	app.route('/push')
	.post(cors(), mobileusers.isAuth, mobileusers.push);

	app.options('/createDeviceToken', cors());
	app.route('/createDeviceToken')
	.post(cors(), mobileusers.isAuth, mobileusers.create);

	app.options('/pushios', cors());
	app.route('/pushios')
	.post(cors(), mobileusers.isAuth, mobileusers.pushios);

};
