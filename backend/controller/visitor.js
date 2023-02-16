const Visitor = require("../models/visitor");

const Appointment = require("../models/appointment");

// Fetch Visitors Details by Aadhar ID or PAN ID
exports.fetchVisitorDetails = async (req, res) => {
    try {
        const visitor = await Visitor.findOne({
            ID_aadhar_pan: req.params.id,
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
        // Fetch visitor details by visitorID
        const visitor = await Visitor.findOne(
            { visitorID: req.params.id },
        );

        // If visitor is not found
        if (!visitor) {
            return res.status(404).json({
                status: "fail",
                message: "No visitor found with this ID",
            });
        }

        // Fetch all appointments of a visitor
        const appointments = await Appointment.find({
            visitorID: req.params.id,
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

// Update Visitors Details by Visitor ID
exports.updateVisitorDetails = async (req, res) => {
    try {

        // Update visitor details
        const visitor = await Visitor.findOneAndUpdate(
            { visitorID: req.params.id },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

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