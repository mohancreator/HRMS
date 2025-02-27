const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    salary: { type: Number, required: true },
    dateOfJoining: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
