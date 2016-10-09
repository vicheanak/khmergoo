'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
      var data = [
          {id: 1, name: 'Accounting', createdAt: now, updatedAt: now},
          {id: 2, name: 'Finance', createdAt: now, updatedAt: now},
          {id: 3, name: 'Sale', createdAt: now, updatedAt: now},
          {id: 4, name: 'Hospitality', createdAt: now, updatedAt: now},
          {id: 5, name: 'Management', createdAt: now, updatedAt: now},
          {id: 6, name: 'IT/Software', createdAt: now, updatedAt: now},
          {id: 7, name: 'Education', createdAt: now, updatedAt: now},
          {id: 8, name: 'Designer', createdAt: now, updatedAt: now}
      ];

      return queryInterface.bulkInsert('JobCategories', data);
  }
};
