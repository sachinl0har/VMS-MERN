import React, { useState } from 'react'



const Feed = () => {
  return (

    <div>
      <div className="row p-2">
        <div className="col-md-12">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Visitor Type</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Visitor Type</label>
                    <select className="form-control">
                      <option>Visitor</option>
                      <option>Contract Employee</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Visitor Type</label>
                    <select className="form-control">
                      <option>Single</option>
                      <option>Group</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-md-12">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Visitor Details</h3>
            </div>
            <div className="card-body">
              <div className="row col-md-12">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Visitors Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Gender</label>
                    <select className="form-control">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mobile No.</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Mobile No." />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Visitors ID</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter ID" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Visitors Address / Company</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Address / Company" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Visitor Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email ID" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Select Visitor</label>
                    <select className="form-control">

                    </select>
                    <button type="button" className="btn btn-sm btn-outline-success mt-2">Fetch Visitor Details</button>
                    <button type="button" className="btn btn-sm btn-outline-danger mt-2">Clear Visitor Details</button>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <img src="https://via.placeholder.com/150" className="img-fluid" alt="Visitors Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row col-md-12 p-2">
        <div className="col-md-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Contact Details</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Group To Visit</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Group Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">From Date</label>
                    <input type="date" className="form-control" id="exampleInputEmail1" placeholder="Enter From Date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Time</label>
                    <input type="time" className="form-control" id="exampleInputEmail1" placeholder="Enter Time" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Contact Employee</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Employee Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">To Date</label>
                    <input type="date" className="form-control" id="exampleInputEmail1" placeholder="Enter To Date" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Purpose</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Purpose" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-md-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Special Permission</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Special Permission</label>
                    <select className="form-control">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Vehicle Permission</label>
                    <select className="form-control">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Laptop Permission</label>
                    <select className="form-control">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control mt-2" id="exampleInputEmail1" placeholder="Enter Special Permission" />
                  </div>
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control mt-2" id="exampleInputEmail1" placeholder="Enter Vehicle No." />
                  </div>
                  <div className="form-group">
                  <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control mt-2" id="exampleInputEmail1" placeholder="Enter Laptop Model" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row col-md-12 p-2 justify-content-center">
        <button type="submit" className="btn btn-success">Submit</button>
      </div>
    </div>

  )
}

export default Feed
