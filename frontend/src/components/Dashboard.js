import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";

const Dashboard = () => {

  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    async function fetchPendingCount() {
      try {
        const response = await axios.get("http://localhost:8000/fetchAllPendingAppointmentsCount");
        const count = response.data.data.count;
        setPendingCount(count);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPendingCount();
  }, []);

  const [approvedCount, setApprovedCount] = useState(0);

  useEffect(() => {
    async function fetchApprovedCount() {
      try {
        const response = await axios.get("http://localhost:8000/fetchAllApprovedAppointmentsCount");
        const count = response.data.data.count;
        setApprovedCount(count);
      } catch (err) {
        console.error(err);
      }
    }
    fetchApprovedCount();
  }, []);

  const [rejectedCount, setRejectedCount] = useState(0);

  useEffect(() => {
    async function fetchRejectedCount() {
      try {
        const response = await axios.get("http://localhost:8000/fetchAllRejectedAppointmentsCount");
        const count = response.data.data.count;
        setRejectedCount(count);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRejectedCount();
  }, []);

  const [allCount, setAllCount] = useState(0);

  useEffect(() => {
    async function fetchAllCount() {
      try {
        const response = await axios.get("http://localhost:8000/fetchAllAppointmentsCount");
        const count = response.data.data.count;
        setAllCount(count);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllCount();
  }, []);

  return (
<div className="content-wrapper">
          
    <section className="content pt-3">
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-info">
              <div className="inner">
                <h3>{pendingCount}</h3>

                <p>Pending</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>
          
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-success">
              <div className="inner">
                <h3>{approvedCount}</h3>

                <p>Approved</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>

          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>{rejectedCount}</h3>

                <p>Rejected</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>
          
          <div className="col-lg-3 col-6">
            
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>{allCount}</h3>

                <p>Total</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              {/* <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a> */}
            </div>
          </div>

        </div>

        
      </div>
    </section>
</div>
  )
}

export default Dashboard
