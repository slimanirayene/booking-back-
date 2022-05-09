var mongoose = require("mongoose");

const Appointment = mongoose.model("appointment", {
	user: String,
	date: String,
	hour: String,
	comment: String,
});
module.exports = Appointment;
