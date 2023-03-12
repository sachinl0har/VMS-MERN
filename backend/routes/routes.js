const express = require("express");
const router = express.Router();

const {
    register,
    login,
    logout,
    fetchEmployeeDetails,
    fetchAppointmentsByECode
 } = require("../controller/employee");

const {
    feedAppointment,
    fetchAppointmentDetails,
    modifyAppointmentDetails,
    deleteAppointment,
    approveRejectAppointment,
    fetchAllAppointments,
    fetchAllPendingAppointmentsCount,
    fetchAllApprovedAppointmentsCount,
    fetchAllRejectedAppointmentsCount,
    fetchAllAppointmentsCount,

    generateBarcode
} = require("../controller/appointment");

const {
    feedApprovalFlow,
    getAllApprovalFlow,
    updateApprovalFlow,
    deleteApprovalFlow,
    getApprovalFlowByOrganizationID
} = require("../controller/approvalFlow");

const {
    fetchVisitorDetails,
    fetchVisitorAppointments,
    updateVisitorDetails
} = require("../controller/visitor");

// AUTHENTICATION ROUTES
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

// EMPLOYEES ROUTES
router.route("/fetchEmployeeDetails/:id").get(fetchEmployeeDetails);
router.route("/fetchAppointmentsByECode/:id").get(fetchAppointmentsByECode);

// APPOINTMENTS ROUTES
router.route("/printPass/:id").get(generateBarcode);
router.route("/fetchAllAppointmentsCount").get(fetchAllAppointmentsCount);
router.route("/fetchAllRejectedAppointmentsCount").get(fetchAllRejectedAppointmentsCount);
router.route("/fetchAllApprovedAppointmentsCount").get(fetchAllApprovedAppointmentsCount);
router.route("/fetchAllPendingAppointmentsCount").get(fetchAllPendingAppointmentsCount);
router.route("/fetchAllAppointments").get(fetchAllAppointments)
router.route("/feedAppointment").post(feedAppointment);
router.route("/fetchAppointmentDetails/:id").get(fetchAppointmentDetails);
router.route("/modifyAppointmentDetails/:id").put(modifyAppointmentDetails);
router.route("/deleteAppointment/:id").put(deleteAppointment);
router.route("/approveRejectAppointment/:id").put(approveRejectAppointment);

// APPROVAL FLOW ROUTES
router.route("/feedApprovalFlow").post(feedApprovalFlow);
router.route("/getAllApprovalFlow").get(getAllApprovalFlow);
router.route("/updateApprovalFlow/:id").put(updateApprovalFlow);
router.route("/deleteApprovalFlow/:id").put(deleteApprovalFlow);
router.route("/getApprovalFlowByOrganizationID/:id").get(getApprovalFlowByOrganizationID);

// VISITORS ROUTES
router.route("/fetchVisitorDetails/:id").get(fetchVisitorDetails);
router.route("/fetchVisitorAppointments/:id").get(fetchVisitorAppointments);
router.route("/updateVisitorDetails/:id").put(updateVisitorDetails);

module.exports = router;