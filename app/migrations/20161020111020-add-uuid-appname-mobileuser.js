'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('MobileUsers', 'uuid', Sequelize.TEXT).then(function(){
      return queryInterface.addColumn('MobileUsers', 'appName', Sequelize.TEXT);
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
      */
    }
  };
