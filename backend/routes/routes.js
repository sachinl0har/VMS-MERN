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
    deleteAppointment
} = require("../controller/appointment");

const {
    feedApprovalFlow,
    getAllApprovalFlow,
    updateApprovalFlow,
    deleteApprovalFlow,
    getApprovalFlowByOrganizationID
} = require("../controller/approvalFlow");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/fetchEmployeeDetails/:id").get(fetchEmployeeDetails);
router.route("/fetchAppointmentsByECode/:id").get(fetchAppointmentsByECode);

router.route("/feedAppointment").post(feedAppointment);
router.route("/fetchAppointmentDetails/:id").get(fetchAppointmentDetails);
router.route("/modifyAppointmentDetails/:id").put(modifyAppointmentDetails);
router.route("/deleteAppointment/:id").put(deleteAppointment);

router.route("/feedApprovalFlow").post(feedApprovalFlow);
router.route("/getAllApprovalFlow").get(getAllApprovalFlow);
router.route("/updateApprovalFlow/:id").put(updateApprovalFlow);
router.route("/deleteApprovalFlow/:id").put(deleteApprovalFlow);
router.route("/getApprovalFlowByOrganizationID/:id").get(getApprovalFlowByOrganizationID);


module.exports = router;