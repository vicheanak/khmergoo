'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    name: DataTypes.TEXT
  }, {
    associate: function(models) {
      Location.hasMany(models.TradeItem);
      Location.hasMany(models.JobItem);
    }
  });
  return Location;
};
