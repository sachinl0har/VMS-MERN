import { useState } from "react";
import axios from "axios";

function FeedAppointmentForm() {
    const [vName, setVName] = useState("");
    const [vEmail, setVEmail] = useState("");
    const [vPhone, setVPhone] = useState("");
    const [vAddress, setVAddress] = useState("");
    const [vCompany, setVCompany] = useState("");
    const [ID_aadhar_pan, setID_aadhar_pan] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [groupToVisit, setGroupToVisit] = useState("");
    const [purpose, setPurpose] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/feedAppointment",
                {
                    vName,
                    vEmail,
                    vPhone,
                    vAddress,
                    vCompany,
                    ID_aadhar_pan,
                    fromDate,
                    toDate,
                    appointmentTime,
                    groupToVisit,
                    purpose,
                }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="content-wrapper">
            <div>
                <div className="row p-2">
                    <div className="col-md-12">
                        <div className="card card-info">
                            <div className="card-header">
                                <h3 className="card-title">Feed</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="vName">Visitor Name</label>
                                                <input
                                                    type="text"
                                                    id="vName"
                                                    className="form-control"
                                                    value={vName}
                                                    onChange={(event) => setVName(event.target.value)}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid visitor name.
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="vEmail">Visitor Email</label>
                                                <input
                                                    type="email"
                                                    id="vEmail"
                                                    className="form-control"
                                                    value={vEmail}
                                                    onChange={(event) => setVEmail(event.target.value)}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid email address.
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="vPhone">Visitor Phone</label>
                                                <input
                                                    type="tel"
                                                    id="vPhone"
                                                    className="form-control"
                                                    value={vPhone}
                                                    onChange={(event) => setVPhone(event.target.value)}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid phone number.
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="groupToVisit">Group to Visit</label>
                                                <input
                                                    type="text"
                                                    id="groupToVisit"
                                                    className="form-control"
                                                    value={groupToVisit}
                                                    onChange={(event) => setGroupToVisit(event.target.value)}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid group to visit.
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="purpose">Purpose</label>
                                                <input
                                                    type="text"
                                                    id="purpose"
                                                    className="form-control"
                                                    value={purpose}
                                                    onChange={(event) => setPurpose(event.target.value)}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid purpose for visit.
                                                </div>
                                            </div>
                                            

                                            
                                            
                                            <div className="form-group">
    <label htmlFor="vAddress">Visitor Address</label>
    <input
        type="text"
        id="vAddress"
        className="form-control"
        value={vAddress}
        onChange={(event) => setVAddress(event.target.value)}
        required
    />
    <div className="invalid-feedback">
        Please provide a valid visitor address.
    </div>
</div>
</div>
                                            <div className="col-md-6">
<div className="form-group">
    <label htmlFor="vCompany">Visitor Company</label>
    <input
        type="text"
        id="vCompany"
        className="form-control"
        value={vCompany}
        onChange={(event) => setVCompany(event.target.value)}
        required
    />
    <div className="invalid-feedback">
        Please provide a valid visitor company name.
    </div>
</div>
<div className="form-group">
    <label htmlFor="ID_aadhar_pan">ID (Aadhar/Pan)</label>
    <input
        type="text"
        id="ID_aadhar_pan"
        className="form-control"
        value={ID_aadhar_pan}
        onChange={(event) => setID_aadhar_pan(event.target.value)}
        required
    />
    <div className="invalid-feedback">
        Please provide a valid ID (Aadhar/Pan) number.
    </div>
</div>
<div className="form-group">
    <label htmlFor="fromDate">From Date</label>
    <input
        type="date"
        id="fromDate"
        className="form-control"
        value={fromDate}
        onChange={(event) => setFromDate(event.target.value)}
        required
    />
    <div className="invalid-feedback">
        Please provide a valid from date.
    </div>
</div>
<div className="form-group">
    <label htmlFor="toDate">To Date</label>
    <input
        type="date"
        id="toDate"
        className="form-control"
        value={toDate}
        onChange={(event) => setToDate(event.target.value)}
        required
    />
    <div className="invalid-feedback">
        Please provide a valid to date.
    </div>
</div>
                                            
                                            <div className="form-group">
                                                <label htmlFor="appointmentTime">Appointment Time</label>
                                                <input
                                                    type="time"
                                                    id="appointmentTime"
                                                    className="form-control"
                                                    value={appointmentTime}
                                                    onChange={(event) => setAppointmentTime(event.target.value)}
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please provide a valid appointment time.
                                                </div>
                                            </div>
                                            
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FeedAppointmentForm;
