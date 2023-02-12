const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
    visitorID: {
        type: String,
        required: true,
    },

    organizationID: {
        type: String,
        ref: "Organization",
        required: true,
    },

    vName : {
        type: String,
        required: true,
    },

    vEmail : {
        type: String,
        required: true,
    },

    vPhone : {
        type: String,
        required: true,
    },

    vAddress : {
        type: String,
        required: true,
    },

    vCompany : {
        type: String,
        required: true,
    },

    ID_aadhar_pan : {
        type: String,
        required: true,
    },

    // Visitors Photo
    vPhoto: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },

    // Visitors Signature
    vSignature: {
        public_id: {
            type: String,
            required: true,
        },

        url: {
            type: String,
            required: true,
        },
    },

    // Visitors QR Code
    vQRCode: {
        public_id: {
            type: String,
            required: true,
        },

        url: {
            type: String,
            required: true,
        },
    },
});

module.exports = mongoose.model("Visitor", visitorSchema);