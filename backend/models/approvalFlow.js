const mongoose = require("mongoose");

const approvalFlowSchema = new mongoose.Schema({
    approvalFlowID: {
        type: String,
        required: true,
    },

    organizationID: {
        type: String,
        ref: "Organization",
        required: true,
    },

    // Level One Approval
    levelOneApproval: {
        type: String,
        ref: "Employee",
        required: true,
    },

    // Level Two Approval
    levelTwoApproval: {
        type: String,
        ref: "Employee",
        required: true,
    },

    // Level Three Approval
    levelThreeApproval: {
        type: String,
        ref: "Employee",
        required: true,
    },

    // Level Four Approval
    levelFourApproval: {
        type: String,
        ref: "Employee",
        required: true,
    },

    // Organization in Time
    organizationInTime: {
        type: String,
        required: true,
    },

    // Organization out Time
    organizationOutTime: {
        type: String,
        required: true,
    },

    // Feed for How many Days
    feedForDays: {
        type: String,
        required: true,
    },

    // status
    status: {
        type: String,
        required: true,
        default: "E",
    },
});

module.exports = mongoose.model("ApprovalFlow", approvalFlowSchema);