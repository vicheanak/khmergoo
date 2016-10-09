'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
      var data = [
          {id: 1, name: 'ពត៌មានក្នុងស្រុក', createdAt: now, updatedAt: now},
          {id: 2, name: 'ពត៌មានក្រៅស្រុក', createdAt: now, updatedAt: now}
      ];

      return queryInterface.bulkInsert('NewsCategories', data);
  }
};
