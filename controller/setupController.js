
let vehicle = require('../model/vehicle.model');
let reading = require('../model/reading.model');

module.exports = function(app){

	app.get('/api/setupDb', function(req, res){
		startData = [
			{
				username: "test",
				todo: "Get up Early",
				isDone: false,
				hasAttachment: false
			},
			{
				username: "Nerd",
				todo: "Learn Node.js",
				isDone: true,
				hasAttachment: false
			},
			{
				username: "Bigot",
				todo: "Complete Todo",
				isDone: false,
				hasAttachment: false
			}
		]

		Todo.create(startData, function(err, results) {
			if(err){
				res.send("Could not add seed data to database");
			}else{
				res.json(results);
			}
		});
	})

}