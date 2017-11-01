let mongoose = require('mongoose');
let config = require('../config');

module.exports.ConnectToMongoDB = function(startApp){

    console.log(config.DatabaseURI);
    if(mongoose.connect(config.DatabaseURI)){
        console.log("Connected to local MongoDB");
        startApp(true);
    }else{
        console.log("Failed to connect to MongoDB");
        startApp(false);
    }
}