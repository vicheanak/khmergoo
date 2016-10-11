'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    var data = [];

    for (var i = 1; i < 10; i ++){
      data.push(
      {
        id: i,
        name: 'Chief Accountant',
        url: 'http://everyjobs.com.kh/en/employer/destination-resorts-co-ltd/chief-accountant-38.html',
        JobCategoryId: 1,
        LocationId: 1,
        WebsiteId: 9,
        company: 'Canadia',
        createdAt: now,
        updatedAt: now
      }
      );
    }

     for (var i = 10; i < 20; i ++){
      data.push(
      {
        id: i,
        name: 'Application Engineer',
        url: 'https://www.everjobs.com.kh/en/employer/ezecom/application-engineer.html',
        JobCategoryId: 2,
        LocationId: 2,
        WebsiteId: 9,
        company: 'Mekong Bank',
        createdAt: now,
        updatedAt: now
      }
      );
    }



    // return queryInterface.bulkInsert('JobItems', data);
  }
};
