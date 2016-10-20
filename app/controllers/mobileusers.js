'use strict';
console.log('Controller');
var _ = require('lodash');
var gcm = require('node-gcm');
var StandardError = require('standard-error');
var db = require('../../config/sequelize');
var path = require('path');
var fs = require('fs');

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
    console.log('Khmer News ===> ', req.body);
    db.MobileUsers.create(req.body).then(function(mobileUser){
        return res.jsonp(mobileUser);
    }).catch(function(err){
        return res.jsonp({error: 'Saved failed'});
    });
}

exports.createDeviceTokenKhmerNews = function(req, res){
    console.log('create device token ===> ', req.body);
    db.MobileUsers.create(req.body).then(function(mobileUser){
        return res.jsonp(mobileUser);
    }).catch(function(err){
        return res.jsonp({error: 'Saved failed'});
    });
}

exports.pushios = function(req, res){

    const apn = require("apn");

    var root = process.cwd();
    var cert = {};
    if (req.body.appName == 'khmergoo'){
        cert.cert = root + '/app/cert/devcert.pem';
        cert.key = root + '/app/cert/devkey.pem';
    }
    else{
        cert.cert = root + '/app/cert/khmernews_devcert.pem';
        cert.key = root + '/app/cert/khmernews_devkey.pem';
    }
    var options = {
        production: false,
        cert: cert.cert,
        key:  cert.key,
        enhanced: true,
    };


    let users = [
    { name: "Wendy", "devices": ["ffabf748fbe84724b5216a464f926cc7d87304e474b1e05c916e9a7ebddeaf36"]},
    ];


    let service = new apn.Provider(options);

    users.forEach( (user) => {

        let note = new apn.Notification();
        note.alert = `Hey ${user.name}, សួស្តីអាគុក`;

        note.topic = "com.khmergoo.app";

        console.log(`Sending: ${note.compile()} to ${user.devices}`);

        service.send(note, user.devices).then( result => {
            console.log("sent:", result.sent.length);
            console.log("failed:", result.failed.length);
            console.log(result.failed);
        });
    });

    service.shutdown();
}

exports.push = function(req, res){
	var registrationTokens = []; //create array for storing device tokens
    var gcmApiKey = req.body.appName == 'khmergoo' ? 'AIzaSyDJQ-vDPrqQMVSYAmBxTgfIsuQl9cjjC90' : 'AIzaSyAUo6kxla5v0I-wFY-KKg4PQZfyYrlBbig';
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
