var mongoose = require("mongoose");

schema = {
	email: String,
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	hasAnAppointment: Boolean,
};

module.exports = mongoose.models.Patient || mongoose.model("Patient", schema);
