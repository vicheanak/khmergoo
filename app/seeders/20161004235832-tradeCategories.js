'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
      var data = [
          {id: 1, name: 'House for Sale', createdAt: now, updatedAt: now},
          {id: 2, name: 'Land for Sale', createdAt: now, updatedAt: now},
          {id: 3, name: 'Cars for Sale', createdAt: now, updatedAt: now},
          {id: 4, name: 'Bikes for Sale', createdAt: now, updatedAt: now},
          {id: 5, name: 'Phones, Tablet', createdAt: now, updatedAt: now},
          {id: 6, name: 'Computers', createdAt: now, updatedAt: now}
      ];

      return queryInterface.bulkInsert('TradeCategories', data);
  }
};
