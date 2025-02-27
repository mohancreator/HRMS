import React, { useState } from "react";
import axios from "axios";
import "./LeaveRequestForm.css";

const LeaveRequestForm = ({ fetchLeaveData }) => {
  const [formData, setFormData] = useState({
    employeeId: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("https://backend-plum-iota-62.vercel.app/leaves", formData);
      setStatus("success");
      fetchLeaveData();
      setFormData({
        employeeId: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
      })
    } catch (error) {
      console.error("Error submitting leave request:", error);
      setStatus("error");
    }
  };

  return (
    <div className="leave-form-container">
      <h3>Request Leave</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
        className="inputs-form"
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />
        <select className="inputs-form" name="leaveType" value={formData.leaveType} onChange={handleChange} required>
          <option value="">Select Leave Type</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option> 
          <option value="Maternity">Maternity</option>          
          <option value="Paternity">Paternity</option>          
          <option value="Vacation">Vacation</option>                    
          <option value="Earned">Earned</option>
          <option value="Unpaid">Unpaid</option>
        </select> 
        <input className="inputs-form" type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        <input className="inputs-form" type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
        <textarea className="inputs-form" name="reason" placeholder="Reason" value={formData.reason} onChange={handleChange} required />
        <button className="submitreq" type="submit">Submit Request</button>
        {status === "loading" && <p>Submitting...</p>}
        {status === "success" && <p className="success-message">Leave request submitted successfully!</p>}
        {status === "error" && <p className="error-message">Failed to submit. Try again.</p>}
      </form>
    </div>
  );
};

export default LeaveRequestForm;
