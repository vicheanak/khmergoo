'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobCategory = sequelize.define('JobCategory', {
    name: DataTypes.TEXT
  }, {
      associate: function(models) {
        JobCategory.hasMany(models.JobItem);
      }
  });
  return JobCategory;
};
