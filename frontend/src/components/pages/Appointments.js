import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net/js/jquery.dataTables.min.js";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/fetchAllAppointments")
      .then(response => {
        console.log(response.data.data.appointments);
        setAppointments(response.data.data.appointments);

        // initialize DataTable
        $(document).ready(() => {
          $('#appointmentsTable').DataTable();
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card-body table-responsive">
              <table id="appointmentsTable" className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Visitor ID</th>
                    <th>Visitor Name</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Fed By</th>
                    <th>Employee to Meet</th>
                    <th>Group to Visit</th>
                    <th>Purpose</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(appointment => (
                    <tr key={appointment._id}>
                      <td>{appointment.appointmentID}</td>
                      <td>{appointment.visitorID}</td>
                      {appointment.visitorDetails.map((visitor) => (
                        <td key={visitor._id}>{visitor.vName}</td>
                       ))}
                      <td>{appointment.fromDate}</td>
                      <td>{appointment.toDate}</td>
                      <td>{appointment.appointmentDate}</td>
                      <td>{appointment.appointmentTime}</td>
                      <td>{appointment.fedBy}</td>
                      <td>{appointment.employeeToMeet}</td>
                      <td>{appointment.groupToVisit}</td>
                      <td>{appointment.purpose}</td>
                      <td>{appointment.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
