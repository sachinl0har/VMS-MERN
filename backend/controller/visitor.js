const Visitor = require("../models/visitor");

// Fetch Visitors Details by Aadhar ID or PAN ID
exports.fetchVisitorDetails = async (req, res) => {
    try {
        const visitor = await Visitor.findOne({
            ID_aadhar_pan: req.body.ID_aadhar_pan,
        });

        // If visitor is not found
        if (!visitor) {
            return res.status(404).json({
                status: "fail",
                message: "No visitor found with this ID",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                visitor,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

// Fetch all appointments of a visitor by visitorID
exports.fetchVisitorAppointments = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.visitorID);

        // If visitor is not found
        if (!visitor) {
            return res.status(404).json({
                status: "fail",
                message: "No visitor found with this ID",
            });
        }

        // Fetch all appointments of a visitor
        const appointments = await Appointment.find({
            visitorID: req.params.visitorID,
        });

        res.status(200).json({
            status: "success",
            data: {
                visitor,
                appointments,
            },
        });

        return appointments;

    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}