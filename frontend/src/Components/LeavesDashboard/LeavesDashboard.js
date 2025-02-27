import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LeavesDashboard.css";
import NavBar from "../NavBar/NavBar";
import LeaveRequestForm from "../LeaveRequestForm/LeaveRequestForm";

const LeaveDashboard = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    fetchLeaveData();
  }, []);

  const fetchLeaveData = () => {
    axios.get("https://backend-plum-iota-62.vercel.app/leaves")
      .then(response => setLeaveData(response.data))
      .catch(error => console.error("Error fetching leave data:", error));
  };

  const filteredLeaves = filterStatus
    ? leaveData.filter((leave) => leave.status === filterStatus)
    : leaveData;

  return (
    <div>
      <NavBar/>
      <h1>Leave Management</h1>
      <LeaveRequestForm fetchLeaveData={fetchLeaveData} />
      <div>
        <label>Filter by Status: </label>
        <select onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <div className="dashboard">
        <div className="card total-requests">
          <h2>Total Leave Requests: {filteredLeaves.length}</h2>
        </div>
        <div className="card table-container">
          <h3>Recent Leave Requests</h3>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave) => (
                <tr key={leave._id}>
                  <td>{leave.employeeId.name}</td>
                  <td>{leave.leaveType}</td>
                  <td>{new Date(leave.startDate).toLocaleDateString()}</td>
                  <td>{new Date(leave.endDate).toLocaleDateString()}</td>
                  <td><span 
                      className={`status ${
                      leave.status === "Pending"
                        ? "status-pending"
                        : leave.status === "Approved"
                        ? "status-approved"
                        : "status-rejected"
                    }`}
                  >
                    {leave.status}
                  </span>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveDashboard;
