const ApprovalFlow = require("../models/approvalFlow");

// Feed Approval Flow
exports.feedApprovalFlow = async (req, res) => {
    try {
        // Generate approvalFlowID
        const approvalFlowID = "AF" + Math.floor(Math.random() * 1000000000);

        // Create new approvalFlow
        const approvalFlow = await ApprovalFlow.create({
            approvalFlowID,
            organizationID: req.body.organizationID,
            levelOneApproval: req.body.levelOneApproval,
            levelTwoApproval: req.body.levelTwoApproval,
            levelThreeApproval: req.body.levelThreeApproval,
            levelFourApproval: req.body.levelFourApproval,
            organizationInTime: req.body.organizationInTime,
            organizationOutTime: req.body.organizationOutTime,
            feedForDays: req.body.feedForDays,
        });

        res.status(201).json({
            status: 'success',
            data: {
                approvalFlow,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

// Get All Approval Flow
exports.getAllApprovalFlow = async (req, res) => {
    try {
        const approvalFlow = await ApprovalFlow.find();

        res.status(200).json({
            status: 'success',
            data: {
                approvalFlow,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

// Update Approval Flow by Approval Flow ID
exports.updateApprovalFlow = async (req, res) => {

    try {

        const approvalFlow = await ApprovalFlow.findOneAndUpdate(
            { approvalFlowID: req.body.approvalFlowID },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        // If approvalFlow is not found
        if (!approvalFlow) {
            return res.status(404).json({
                status: 'fail',
                message: 'No approvalFlow found with this ID',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                approvalFlow,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

// Update Status to Deleted by Approval Flow ID
exports.deleteApprovalFlow = async (req, res) => {
    try {

        const approvalFlow = await ApprovalFlow.findOneAndUpdate(
            { approvalFlowID: req.body.approvalFlowID },
            { status: 'D' },
            {
                new: true,
                runValidators: true,
            }
        );

        // If approvalFlow is not found
        if (!approvalFlow) {
            return res.status(404).json({
                status: 'fail',
                message: 'No approvalFlow found with this ID',
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                approvalFlow,
            },
        });

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}

// Get Approval Flow by Organization ID
exports.getApprovalFlowByOrganizationID = async (req, res) => {
    try {
        const approvalFlow = await ApprovalFlow.find({ organizationID: req.body.organizationID });

        res.status(200).json({
            status: 'success',
            data: {
                approvalFlow,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
}