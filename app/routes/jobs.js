'use strict';

var jobs = require('../../app/controllers/jobs');

module.exports = function(app) {

app.route('/jobs')
    .get(jobs.all);
app.route('/jobs/:JobCategoryId')
    .get(jobs.items);

};

