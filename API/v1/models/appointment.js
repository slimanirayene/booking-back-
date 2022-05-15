var mongoose = require("mongoose");

skeleton = {
	user: String,
	date: String,
	hour: String,
	comment: String,
};

module.exports =
	mongoose.models.Appointment || mongoose.model("Appointment", skeleton);
