'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
      var data = [
          {id: 1, name: 'Kohsantepheap', createdAt: now, updatedAt: now},
          {id: 2, name: 'Dap-News', createdAt: now, updatedAt: now},
          {id: 3, name: 'Thmey Thmey', createdAt: now, updatedAt: now},
          {id: 4, name: 'VOA News', createdAt: now, updatedAt: now},
          {id: 5, name: 'Kampuchea Thmey', createdAt: now, updatedAt: now},
          {id: 6, name: 'Cambodia Daily Khmer', createdAt: now, updatedAt: now},
          {id: 7, name: 'Phnom Penh Post Khmer', createdAt: now, updatedAt: now},
          {id: 8, name: 'Khmer24', createdAt: now, updatedAt: now},
          {id: 9, name: 'Everjobs', createdAt: now, updatedAt: now}
      ];

      return queryInterface.bulkInsert('Websites', data);
  }
};
