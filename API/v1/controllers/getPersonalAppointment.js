let Appointment = require("../models/appointment");
let jwt = require("jsonwebtoken");

const GetPersonalAppointment = async (req, resp) => {
	let token = req.header("TOKEN");

	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		resp.status(403).json({ status: "invalid token" });
	} else {
		let user_info = jwt.verify(token, "sheeeesh");
		let id = user_info.user_id;

		console.log(user_info);
		try {
			Appointment.find({ user: id }, (err, accounts) => {
				if (err == null && accounts.length > 0) {
					console.log(accounts);
					resp.status(200).json(accounts);
				} else {
					resp.status(300).json({ status: "No appointments were found !" });
				}
			});
		} catch (e) {
			console.log(e);
		}
	}
};

module.exports = GetPersonalAppointment;
