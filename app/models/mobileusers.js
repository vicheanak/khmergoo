'use strict';
console.log('Model');
module.exports = function(sequelize, DataTypes) {
  var MobileUsers = sequelize.define('MobileUsers', {
    deviceToken: DataTypes.TEXT,
    uuid: DataTypes.TEXT,
    appName: DataTypes.TEXT
  }, {
    associate: function(models) {
        // associations can be defined here
      }
    });
  return MobileUsers;
};
