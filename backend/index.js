require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Employee = require("./modals/employee")
const LeaveRequest = require("./modals/leaves")
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://smart-human-resource.netlify.app', 
    credentials: true
  }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/employees", async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/employees/:id", async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/employees/:id", async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: "Employee Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/leaves", async (req, res) => {
    try {
        console.log("Received data:", req.body);
        const leave = await LeaveRequest.create(req.body);
        res.status(201).json(leave);
    } catch (err) {
        console.error("Error creating leave request:", err.message);
        res.status(400).json({ error: err.message });
    }
});


app.get("/leaves", async (req, res) => {
    try {
        const leaves = await LeaveRequest.find().populate("employeeId");
        res.json(leaves);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get("/leaves/employee/:employeeId", async (req, res) => {
    try {
        const leaves = await LeaveRequest.find({ employeeId: req.params.employeeId });
        res.json(leaves);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/leaves/:id", async (req, res) => {
    try {
        const leave = await LeaveRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(leave);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete("/leaves/:id", async (req, res) => {
    try {
        await LeaveRequest.findByIdAndDelete(req.params.id);
        res.json({ message: "Leave Request Deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));