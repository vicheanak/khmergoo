'use strict';
module.exports = function(sequelize, DataTypes) {
  var TradeCategory = sequelize.define('TradeCategory', {
    name: DataTypes.STRING
  }, {
    associate: function(models) {
      TradeCategory.hasMany(models.TradeItem);
    }
  });
  return TradeCategory;
};
