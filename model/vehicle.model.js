var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
	vin: String,
	make: String,
	model: String,
	year: Number,
	redlineRpm: Number,
	maxFuelVolume: Number,
	lastServiceDate: Date
})

module.exports = mongoose.model('Vehicle', vehicleSchema);