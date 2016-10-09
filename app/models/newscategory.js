'use strict';
module.exports = function(sequelize, DataTypes) {
  var NewsCategory = sequelize.define('NewsCategory', {
    name: DataTypes.TEXT
  }, {
    associate: function(models) {
      NewsCategory.hasMany(models.NewsArticle);
    }
  });
  return NewsCategory;
};
