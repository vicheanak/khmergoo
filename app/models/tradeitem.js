'use strict';
module.exports = function(sequelize, DataTypes) {
  var TradeItem = sequelize.define('TradeItem', {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    price: DataTypes.FLOAT
  }, {
    associate: function(models) {
      TradeItem.belongsTo(models.Location);
      TradeItem.belongsTo(models.Website);
      TradeItem.belongsTo(models.TradeCategory);
    }
  });

  return TradeItem;
};
