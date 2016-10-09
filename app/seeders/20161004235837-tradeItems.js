'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    var data = [];

    for (var i = 1; i < 50; i ++){
      data.push(
      {
        id: i,
        name: 'New Flat houses for sale on 7NG road (conrete road 12m)',
        description: 'ផ្ទះល្វែងលក់ក្នុងតំលៃពិសេស 1170$/ខែ ជិតផ្សារ នៅលើធំ',
        url: 'https://www.khmer24.com/new-flat-houses-for-sale-on-7ng-road-conrete-road-12m-adid-1169019.html',
        imageUrl: 'https://www.khmer24.com/images/items/16-03-07/33754-evergreen-c55-c.jpg',
        price: 12000,
        LocationId: 1,
        WebsiteId: 8,
        TradeCategoryId: 1,
        createdAt: now,
        updatedAt: now
      }
      );
    }

     for (var i = 50; i < 100; i ++){
      data.push(
     {
        id: i,
        name: 'ដីឡូតិ៍ពុះលក់ថ្មីៗ នៅភ្នំពេញ',
        description: 'ដីឡូតិ៍ពុះលក់ថ្មីៗៗៗៗ',
        url: 'https://www.khmer24.com/-adid-995957.html',
        imageUrl: 'https://www.khmer24.com/images/items/16-09-29/120100-81-c.jpg',
        price: 8000,
        LocationId: 1,
        WebsiteId: 8,
        TradeCategoryId: 2,
        createdAt: now,
        updatedAt: now
      }
      );
    }



    return queryInterface.bulkInsert('TradeItems', data);
  }
};
