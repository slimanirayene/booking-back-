let Appointment = require("../models/appointment");

const GetData = async (req, resp) => {
	let filter = req.query.q.substring(0, 10);

	Appointment.find({ date: filter }, (err, accounts) => {
		// console.log(accounts);
		if (err == null && accounts.length > 0) {
			console.log(accounts);
			resp.status(200).json(accounts);
		} else {
			resp.status(300).json({ status: "No appointments were found !" });
		}
	});
};

module.exports = GetData;
