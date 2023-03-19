const Appointment = require("../models/appointment");
const Visitor = require("../models/visitor");
const bwipjs = require('bwip-js');
const moment = require('moment');

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

        // Get employeeID from cookies
        const empId = req.cookies.employeeId;

        const orgId = req.cookies.organizationId;

        console.log("req.cookies.employeeId : " + empId);

        // Create new appointment
        const appointment = await Appointment.create({
            appointmentID,
            visitorID,
            fromDate: req.body.fromDate,
            toDate: req.body.toDate,
            appointmentDate: req.body.fromDate,
            appointmentTime: req.body.appointmentTime,

            fedBy: empId,
            employeeToMeet: empId,

            groupToVisit: req.body.groupToVisit,
            purpose: req.body.purpose,
            status: "Pending",

            organizationID : orgId,
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

        // Fetch Appointment Details by Appointment ID and join with Visitor Details by visitorID and Employee Details by employeeID
        const appointment = await Appointment.aggregate([
            {
                $match: {
                    appointmentID: req.params.id,
                },
            },
            {
                $lookup: {
                    from: "visitors",
                    localField: "visitorID",
                    foreignField: "visitorID",
                    as: "visitor",
                },
            }
        ]);


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
  
  // Fetch all pending appointments count for dashboard
    exports.fetchAllPendingAppointmentsCount = async (req, res) => {
        try {
            const count = await Appointment.countDocuments({ status: "Pending" });
            res.status(200).json({
                status: "success",
                data: {
                    count,
                },
            });
        } catch (err) {
            res.status(400).json({
                status: "fail",
                message: err.message,
            });
        }
    }

// Fetch all approved appointments count for dashboard
exports.fetchAllApprovedAppointmentsCount = async (req, res) => {
    try {
        const count = await Appointment.countDocuments({ status: "Approved" });
        res.status(200).json({
            status: "success",
            data: {
                count,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

// Fetch all rejected appointments count for dashboard
exports.fetchAllRejectedAppointmentsCount = async (req, res) => {
    try {
      const count = await Appointment.countDocuments({ status: "Rejected" });
      res.status(200).json({
        status: "success",
        data: {
          count,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  };

  // Fetch All Appointments Count excluding deleted appointments
exports.fetchAllAppointmentsCount = async (req, res) => {
    try {
        const count = await Appointment.countDocuments({ status: { $ne: "Deleted" } });
        res.status(200).json({
            status: "success",
            data: {
                count,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};
  

// Generate a barcode for appointment ID
exports.generateBarcode = async (req, res) => {
    try {
        const appointment = await Appointment.findOne({
            appointmentID: req.params.id,
        });

        // Get Visitors Details by Visitor ID
        const visitor = await Visitor.findOne({
            visitorID: appointment.visitorID,
        });

        // If appointment is not found
        if (!appointment) {
            return res.status(404).json({
                status: "fail",
                message: "No appointment found with this ID",
            });
        }

        // Format appointment date to DD/MM/YYYY
        const appointmentDate = moment(appointment.appointmentDate).format("DD/MM/YYYY").toString();
        console.log(appointmentDate);
        const appointmentTime = appointment.appointmentTime.toString();
        
        // Generate Barcode using appointment ID + appointment date (Date and Month) + appointment time (Hours) + Current Date and Time
        const barcodeId = appointment.appointmentID + appointmentDate.substring(0, 2) + appointmentDate.substring(3, 5) + appointmentTime.substring(0, 2) + moment().format("DDMMYYHH").toString();

        const barcode = await bwipjs.toBuffer({
            bcid: "code128", // Barcode type
            
            text: barcodeId, // Text to encode
            scale: 3, // 3x scaling factor
            height: 10, // Bar height, in millimeters
            includetext: true, // Show human-readable text
            textxalign: "center", // Always good to set this
        });

        res.writeHead(200, {
            "Content-Type": "image/png",
            "Content-Length": barcode.length,
        });

        res.end(barcode);
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

// Update Appointment Status to Visitors Checked In
exports.VisitorCheckedIn = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndUpdate(
            { appointmentID: req.params.id },
            { status: "Checked In" },
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

exports.VisitorCheckedOut = async (req, res) => {
    try {
        const appointment = await Appointment.findOneAndUpdate(
            { appointmentID: req.params.id },
            { status: "Checked Out" },
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