'use strict';
module.exports = function(sequelize, DataTypes) {
  var Website = sequelize.define('Website', {
    name: DataTypes.TEXT,
    url: DataTypes.TEXT
  }, {
      associate: function(models) {
        Website.hasMany(models.NewsArticle);
        Website.hasMany(models.TradeItem);
        Website.hasMany(models.JobItem);
      }
  });
  return Website;
};
