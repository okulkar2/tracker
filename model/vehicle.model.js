var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
	vehicle: String,
	make: String,
	model: String,
	year: Number,
	redlineRpm: Number,
	maxFuelVolume: Number,
	lastServiceDate: String
})

module.exports = mongoose.model('Vehicle', vehicleSchema);