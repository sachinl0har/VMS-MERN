const mongoose = require("mongoose");

const Employee = require("./employee");

const appointmentSchema = new mongoose.Schema({

    appointmentID: {
        type: String,
        required: true,
    },

    organizationID: {
        type: String,
        ref: "Organization",
        required: true,
    },

    visitorID: {
        type: String,
        ref: "Visitor",
        required: true,
    },

    fromDate: {
        type: Date,
        required: true,
    },

    toDate: {
        type: Date,
        required: true,
    },

    // current date of appointment
    appointmentDate: {
        type: Date,
        required: true,
    },

    appointmentTime: {
        type: String,
        required: true,
    },

    fedBy: {
        type: String,
        ref: "Employee",
        required: true,
    },

    employeeToMeet: {
        type: String,
        ref: "Employee",
        required: true,
    },

    groupToVisit: {
        type: String,
        required: true,
    },

    purpose: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        required: true,
    },

    remarks : {
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("Appointment", appointmentSchema);
