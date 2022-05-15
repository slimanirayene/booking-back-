let jwt = require("jsonwebtoken");
let Appointment = require("../models/appointment");

const SetAppointments = async (req, resp) => {
	let date = req.body.date.substring(0, 10);
	let hour = req.body.hour;
	let comment = req.body.comment;
	console.log(req.body);

	let token = req.header("TOKEN");

	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		resp.status(403).json({ status: "invalid token" });
	} else {
		let user_info = jwt.verify(token, "sheeeesh");
		let id = user_info.user_id;

		console.log(user_info);
		Appointment.find({ date: date, hour: hour }, async (err, results) => {
			if (err == null && results.length > 0) {
				resp.status(300).json({ status: "Appointment already taken" });
				console.log(results);
			} else {
				try {
					let doc = new Appointment({
						user: user_info.user_id,
						date: date,
						hour: hour,
						comment: comment,
					});
					await doc.save();
					resp.status(200).json({ status: "Appointment added succefully" });
				} catch (err) {
					resp.status(300).json({ status: "Could not set an appointment" });
					console.log(err);
				}
			}
		});
	}
};

module.exports = SetAppointments;
