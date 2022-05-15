var Appointment = require("../models/appointment");
let jwt = require("jsonwebtoken");

let DeleteAppointment = async (req, res) => {
	let token = req.header("TOKEN");
	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		res.status(403).send("User not founds");
	} else {
		try {
			console.log(req.body);
			jwt.verify(token, "sheeeesh");
			let id = req.body.id || "";

			Appointment.deleteOne({ _id: id }).exec((err, text) => {
				if (err == null) {
					res.status(200);
					res.json(text);
				} else {
					res.status(300);
					res.send("NOT OK");
				}
			});
		} catch (err) {
			console.log("Token invalid", err);
			res.status(403).send("You're not authorized, login first");
		}
	}
};
module.exports = DeleteAppointment;
