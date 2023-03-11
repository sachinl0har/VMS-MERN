const Appointment = require("../models/appointment");
const Visitor = require("../models/visitor");

// initialize await fetchVisitorDetails(req, res);
const fetchVisitorDetails = async (req, res) => {
    try {
        // Fetch Visitors Details by Aadhar ID or PAN ID
        const visitor = await Visitor.findOne({
            ID_aadhar_pan: req.body.ID_aadhar_pan,
        });

        // Return visitorID
        return visitor.visitorID;
    } catch (error) {
        console.log(error);
    }
};

// Feed Appointment
exports.feedAppointment = async (req, res) => {
    try {
        // Generate appointmentID
        const appointmentID = "AP" + Math.floor(Math.random() * 1000000000);

        // Initialize visitorID
        let visitorID;

        // Initialize visitor
        let newVisitor;

        // Check if visitor already exists
        const visitor = await Visitor.findOne({
            ID_aadhar_pan: req.body.ID_aadhar_pan,
        });

        // If visitor is not found
        if (!visitor) {
            // generate Visitor ID
            visitorID = "V" + Math.floor(Math.random() * 1000000000);

        // Create new visitor
        newVisitor = await Visitor.create({
            visitorID,
            vName: req.body.vName,
            vEmail: req.body.vEmail,
            vPhone: req.body.vPhone,
            vAddress: req.body.vAddress,
            vCompany: req.body.vCompany,
            ID_aadhar_pan: req.body.ID_aadhar_pan,

            vPhoto: {
                // public_id: req.body.vPhoto.public_id,
                // url: req.body.vPhoto.url,
                public_id: "Sample_ID",
                url: "Sample.url",
            },
            vSignature: {
                // public_id: req.body.vSignature.public_id,
                // url: req.body.vSignature.url,
                public_id: "Sample_ID",
                url: "Sample.url",
            },
            // or code
            vQRCode: {
                // public_id: req.body.vQRCode.public_id,
                // url: req.body.vQRCode.url,
                public_id: "Sample_ID",
                url: "Sample.url",
            },
        });

        }else{
            // Fetch Visitors Details by Aadhar ID or PAN ID
            visitorID = await fetchVisitorDetails(req, res);
        }

        // Create new appointment
        const appointment = await Appointment.create({
            appointmentID,
            visitorID,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate,
            appointmentDate: req.body.fromDate,
            appointmentTime: req.body.appointmentTime,

            fedBy: req.cookies.employeeId,
            employeeToMeet: req.cookies.employeeId,

            groupToVisit: req.body.groupToVisit,
            purpose: req.body.purpose,
            status: "Pending",
            organizationID : req.cookies.organizationID,
        });

        res.status(201).json({
            status: "success",
            data: {
                newVisitor,
                appointment
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

// Fetch Appointment Details by Appointment ID
exports.fetchAppointmentDetails = async (req, res) => {
    try {
        const appointment = await Appointment.findOne({
            appointmentID: req.params.id,
        });

        // If appointment is not found
        if (!appointment) {
            return res.status(404).json({
                status: "fail",
                message: "No appointment found with this ID",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                appointment,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

// Modify Appointment Details by Appointment ID
exports.modifyAppointmentDetails = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndUpdate(
            { appointmentID: req.params.id },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        // If appointment is not found
        if (!appointment) {
            return res.status(404).json({
                status: "fail",
                message: "No appointment found with this ID",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                appointment,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

// Update Status to Deleted by Appointment ID
exports.deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndUpdate(
            { appointmentID: req.params.id },
            { status: "Deleted" },
            {
                new: true,
                runValidators: true,
            }
        );

        // If appointment is not found
        if (!appointment) {
            return res.status(404).json({
                status: "fail",
                message: "No appointment found with this ID",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                appointment,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

// Approve Reject Appointment by Appointment ID
exports.approveRejectAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndUpdate(
            { appointmentID: req.params.id },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        // If appointment is not found
        if (!appointment) {
            return res.status(404).json({
                status: "fail",
                message: "No appointment found with this ID",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                appointment,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
}

// Fetch All Appointments
exports.fetchAllAppointments = async (req, res) => {
    try {

        
        const appointments = await Appointment.aggregate([
            {
                $lookup: {
                    from: "visitors",
                    localField: "visitorID",
                    foreignField: "visitorID",
                    as: "visitorDetails",
                },
            },
            {
                $lookup: {
                    from: "employees",
                    localField: "employeeToMeet",
                    foreignField: "employeeID",
                    as: "employeeDetails",
                },
            },
        ]);
        

        res.status(200).json({
            status: "success",
            data: {
                appointments,
            },
        });

    //   const appointments = await Appointment.find();
    //   res.status(200).json({
    //     status: "success",
    //     data: {
    //       appointments,
    //     },
    //   });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }
  