
let vehicle = require('../model/vehicle.model');
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

	app.get('/api/todos', function(req, res){
		
		console.log("Retrieving a Todo with username");
		
		Todo.find({}).exec(function(err, todoList){
		
			if (err){
				res.send(`There is no ${req.params.uname} present in the  database`);
			}else{
				res.send(JSON.stringify(todoList));
			}
		});
		
	});

	app.put('/api/vehicles', function(req, res){

		console.log("Saving the data to Database");

		for(let i=0; i<req.body.length; i++){
			console.log(i+":"+req.body[i].lastServiceDate);
		}

		res.status(200).send("Received Vehicles data");

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

	app.delete('/api/todo', function(req, res){

		console.log("Deleting a specific User from the DataBase");

		Todo.findByIdAndRemove(req.body.id, function(err, todo){

			if(err){
				

				res.send('Unable to delete');

			}else{
				
				let response = {
					message: "Todo successfully removed",
					id: todo._id
				}

				res.status(200).send(response);
			}


		})

	});

}
