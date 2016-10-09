'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobItem = sequelize.define('JobItem', {
    name: DataTypes.TEXT,
    url: DataTypes.TEXT,
    company: DataTypes.TEXT
  }, {
    associate: function(models) {
      JobItem.belongsTo(models.Location);
      JobItem.belongsTo(models.Website);
      JobItem.belongsTo(models.JobCategory);
    }
  });
  return JobItem;
};
