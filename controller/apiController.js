
let Vehicle = require('../model/vehicle.model');
let reading = require('../model/reading.model');
let bodyParser = require('body-parser');

module.exports = function(app){

	console.log("Api Controller is running");
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.use('/api/vehicles', function(req, res, next){

		res.setHeader("Access-Control-Allow-Origin", "http://mocker.egen.io");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		
		if(req.method === "OPTIONS")
			res.sendStatus(200);
		else
			next();
	});

	app.get('/api/vehicles', function(req, res){
		
		console.log("Retrieving a Todo with username");
		
		Vehicle.find({}).exec(function(err, vehicleList){
		
			if (err){
				res.send("There is no vehicles present in the  database");
			}else{
				res.send(JSON.stringify(vehicleList));
			}
		});
		
	});

	app.put('/api/vehicles', function(req, res){

		console.log("Saving the data to Database");

		console.log(req.body);
		let newVehicle = [];
		for(let i=0; i<req.body.length; i++){

			newVehicle[i] = new Vehicle();

			newVehicle[i].vin = req.body[i].vin;
			newVehicle[i].make = req.body[i].make;
			newVehicle[i].model = req.body[i].model;
			newVehicle[i].year = req.body[i].year;
			newVehicle[i].redlineRpm = req.body[i].redlineRpm;
			newVehicle[i].maxFuelVolume = req.body[i].maxFuelVolume;
			newVehicle[i].lastServiceDate = new Date(req.body[i].lastServiceDate);
			
		}

		Vehicle.create(newVehicle, function(err){
			if(err){
				res.send("Could not add data to the Database");
			}else{
				res.status(200).send("<html><head></head><body><h2>The Data has been successfully added to the Database</h2></body></html>");
			}
		})

		/*if(req.body.id){
			Todo.findByIdAndUpdate(req.body.id, { $set: {
				todo: req.body.todo,
				isDone: req.body.isDone,
				hasAttachment: req.hasAttachment
			}}, function(err, todo){
				if(err){
					res.send("The Document could not be found");
				}else{
					res.json(todo);
				}
			})

		}else{*/

			/*var newTodo = new Todo();

			newTodo.username = "test";
			newTodo.todo = req.body.todo;
			newTodo.isDone = req.body.isDone;
			newTodo.hasAttachment = req.body.hasAttachment;

			newTodo.save(function(err, todo){
				if(err){
					res.send("The new Document didn't save");
				}else{
					res.send("<html><head></head><body><h2>The Data has been successfully added to the Database</h2></body></html>");
				}
			})
		}*/
		
	});

}
