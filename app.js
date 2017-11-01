let express = require('express');
let mongoose = require('mongoose');
let config = require('./config');
//let apiController = require('./controller/apiController');
//let setupController = require('./controller/setupController');
let dbFunctions = require('./dbStore/dbFunctions');

var app = express();
mongoose.Promise = global.Promise;

app.use('/', express.static(__dirname+'/public'));

dbFunctions.ConnectToMongoDB(startApp);

function startApp(isSuccess){
    if(isSuccess){

        app.listen(config.web_port, function(){
            console.log('Server started on '+ config.web_port);
        });
    }else{
        console.log("Server failed to start.");
    }
}