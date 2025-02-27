const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee", required: true }, 
    leaveType: { type: String, required: true, enum: ["Sick", "Casual", "Maternity", "Paternity", "Vacation", "Earned", "Unpaid"] }, 
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("LeaveRequest", LeaveSchema);
