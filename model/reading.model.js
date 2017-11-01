let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let readingSchema = new Schema({
	username: String,
	todo: String,
	isDone: Boolean,
	hasAttachment: Boolean
});

module.exports = mongoose.model('Reading', readingSchema);