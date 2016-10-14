'use strict';
module.exports = function(sequelize, DataTypes) {
  var NewsArticle = sequelize.define('NewsArticle', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    postedDate: DataTypes.VIRTUAL
  }, {
    associate: function(models) {
      NewsArticle.belongsTo(models.Website);
      NewsArticle.belongsTo(models.NewsCategory);
    }
  });
  return NewsArticle;
};
