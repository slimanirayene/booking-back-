var mongoose = require("mongoose");

const User = mongoose.model("user", {
	email: String,
	username: String,
	password: String,
	firstName: String,
	lastName: String,
});
module.exports = User;
