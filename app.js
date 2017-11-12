let express = require('express');
let mongoose = require('mongoose');
let config = require('./config');
let path = require('path');
let apiController = require('./controller/apiController');
//let setupController = require('./controller/setupController');
let dbFunctions = require('./dbStore/dbFunctions');

var app = express();
mongoose.Promise = global.Promise;
apiController(app);

app.use(express.static(path.join(__dirname+'/public/dist')));

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/dist/index.html'));
});*/

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