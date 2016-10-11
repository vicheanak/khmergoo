'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    var data = [];

    for (var i = 1; i < 100; i ++){
      data.push(
      {
        id: i,
        name: 'មន្ទីរ​ពិសោធន៍​ទំនិញ ៣ ត្រូវ​បាន​សាងសង់​នៅ​តាម​ច្រក​ព្រំដែន',
        description: 'ភ្នំពេញៈ កាលពី​ម្សិលមិញ​អគ្គនាយកដ្ឋាន​កាំកុងត្រូល​បាន​ប្រកាស​ផែនការ​ថ្មី​មួយ​ដើម្បី​សាងសង់​មន្ទីរពិសោធន៍​ខ្នាត​តូច​ចំនួន​បី​នៅ​ប៉ុស្តិ៍​ត្រួតពិនិត្យ​តាម​ព្រំដែន​ក្នុង​គោលបំណង​ដើម្បី​ត្រួតពិនិត្យ​មើល​ឲ្យ​បាន​ហ្មត់ចត់​ចំពោះ​ម្ហូបអាហារ​ដែល​នាំ​ចូល​មក​កម្ពុជា​។',
        url: 'www.postkhmer.com/ព័ត៌មានជាតិ/មន្ទីរពិសោធន៍ទំនិញ-៣-ត្រូវបានសាងសង់នៅតាមច្រកព្រំដែន',
        imageUrl: 'http://www.postkhmer.com/sites/default/files/styles/two-col/public/field/image/1-Meeting-SalaryWorker.jpg?itok=6e6SL1Mj',
        NewsCategoryId: 1,
        WebsiteId: 1,
        createdAt: now,
        updatedAt: now
      }
      );
    }

     for (var i = 100; i < 200; i ++){
      data.push(
      {
        id: i,
        name: 'សមត្ថកិច្ច​ឃាត់ខ្លួន​បុរស​៧​នាក់ ខណៈ​ឃើញ​បក្ខ​ពួកគេ​៣​នាក់​កោរសក់ សង្ស័យ​ជា​សង្ឃ​ល្មើស​វិន័យ',
        description: 'ភ្នំពេញ ៖ សមត្ថកិច្ចនគរបាលខណ្ឌសែនសុខ បានឃាត់ខ្លួនពួកបក្ខក្រុមក្មេងស្ទាវ៧នាក់សួរនាំ ខណៈឃើញបក្ខពួកគេ៣នាក់ក្នុងចំណោមនោះ កោរសក់សង្ស័យថា ជាសង្ឃល្មើសវិន័យ មកដើរលេងពាលាអាវាសែខុសច្បាប់ នៅម៉ោង២៤និង២០នាទីរំលងអធ្រាត្រ ឈានចូលថ្ងៃទី០៤ ខែតុលា ឆ្នាំ២០១៦ នៅតាមបណ្តោយផ្លូវលេខ២០០៤ភូមិទឹកថ្លា សង្កាត់ទឹកថ្លា ខណ្ឌសែនសុខ។',
        url: 'http://kampucheathmey.com/2016/archives/399498',
        imageUrl: 'http://kampucheathmey.com/2016/wp-content/uploads/2016/10/T-10-04-16-z-full-700x400.jpg',
        NewsCategoryId: 2,
        WebsiteId: 2,
        createdAt: now,
        updatedAt: now
      }
      );
    }



    // return queryInterface.bulkInsert('NewsArticles', data);
  }
};
