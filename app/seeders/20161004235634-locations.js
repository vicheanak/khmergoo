'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
      var data = [
          {id: 1, name: 'Phnom Penh', createdAt: now, updatedAt: now},
          {id: 2, name: 'Siem Reap', createdAt: now, updatedAt: now},
          {id: 3, name: 'Preh Sihaknouk', createdAt: now, updatedAt: now},
          {id: 4, name: 'Battambang', createdAt: now, updatedAt: now},
          {id: 5, name: 'Kandal', createdAt: now, updatedAt: now},
          {id: 6, name: 'Banteay Meanchey', createdAt: now, updatedAt: now},
          {id: 7, name: 'Bavet', createdAt: now, updatedAt: now},
          {id: 8, name: 'Kompong Chhnang', createdAt: now, updatedAt: now}
      ];

      return queryInterface.bulkInsert('Locations', data);
  }
};
