'use strict';
console.log('Controller');
var _ = require('lodash');
var gcm = require('node-gcm');
var gcmApiKey = 'AIzaSyDJQ-vDPrqQMVSYAmBxTgfIsuQl9cjjC90';
var StandardError = require('standard-error');
var db = require('../../config/sequelize');

exports.isAuth = function(req, res, next){
    var token = req.headers.authorization;
    var value = '04;oCMQmit>Q8_LxYg4<BS6x%8eX$F7z4d1cl:a0h5CIr9Q!}a2O+6W@Ho5dM@';
    if (token == value){
        next();
    }
    else{
        return res.jsonp({error: 'no access'});
    }
}

exports.create = function(req, res){
    db.MobileUsers.create(req.body).then(function(mobileUser){
        return res.jsonp(mobileUser);
    }).catch(function(err){
        return res.jsonp({error: 'Saved failed'});
    });
}

exports.push = function(req, res){
	var registrationTokens = []; //create array for storing device tokens

    var retry_times = 4; //the number of times to retry sending the message if it fails
    var sender = new gcm.Sender(gcmApiKey); //create a new sender
    var message = new gcm.Message(); //create a new message
    message.addData('title', "You're out of date! Let's update now!");
    message.addData('message', "KhmerGoo");
    message.addData('sound', 'default');
    message.collapseKey = 'KhmerGoo'; //grouping messages
    message.delayWhileIdle = true; //delay sending while receiving device is offline
    message.timeToLive = 3; //number of seconds to keep the message on
    //server if the device is offline

    db.MobileUsers.findAll().then(function(mobileUsers){
        for (var i = 0; i < mobileUsers.length; i ++){
            registrationTokens.push(mobileUsers[i].deviceToken);
        }
        console.log('registrationToken', registrationTokens);

        sender.send(message, { registrationTokens: registrationTokens }, retry_times, function (result) {
            console.log('Result', result);
            console.log('push sent to: ' + registrationTokens.toString());
            return res.jsonp(mobileUsers);
        }, function (err) {
            res.status(500).send('failed to push notification ');
        });
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });


}
