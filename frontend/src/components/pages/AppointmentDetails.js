import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentDetails() {
  debugger;
  const id = window.location.pathname.split('/')[2];
  const [appointment, setAppointment] = useState({});

  //useEffect(() => {
    async function fetchAppointment() {
      try {
        const response = await axios.get(`http://localhost:8000/fetchAppointmentDetails/${id}`);
        console.log(response.data.data.appointment);
        // Get visitorName from response.data.data.appointment
        console.log(response.data.data.appointment[0].appointmentID);
        setAppointment(response.data.data.appointment);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAppointment();
  //}, [id]);

  return (
    <div className="content-wrapper">

      <div>
        <div className="row p-2">
          <div className="col-md-12">
            <div className="card card-info">
              <div className="card-header">
                <h3 className="card-title">Appointment Detail</h3>
              </div>
              <div className="card-body">
                  <h1>Appointment Details</h1>
                  <p>ID: <b>{appointment[0].appointmentID}</b></p>
                  <p>Name: <b>{appointment[0]['visitor'][0].vName}</b></p>
                  <p>Email: <b>{appointment[0]['visitor'][0].vEmail}</b></p>
                  <p>Phone: <b>{appointment[0]['visitor'][0].vPhone}</b></p>
                  <p>Address: <b>{appointment[0]['visitor'][0].vAddress}</b></p>
                  <p>Company: <b>{appointment[0]['visitor'][0].vCompany}</b></p>
                  <p>ID/Aadhar/PAN: <b>{appointment[0]['visitor'][0].ID_aadhar_pan}</b></p>
                  <p>From Date: <b>{appointment[0].fromDate}</b></p>
                  <p>To Date: <b>{appointment[0].toDate}</b></p>
                  <p>Appointment Time: <b>{appointment[0].appointmentTime}</b></p>
                  <p>Group To Visit: <b>{appointment[0].groupToVisit}</b></p>
                  <p>Purpose: <b>{appointment[0].purpose}</b></p>
                  <p>Status: <b>{appointment[0].status}</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AppointmentDetails;
