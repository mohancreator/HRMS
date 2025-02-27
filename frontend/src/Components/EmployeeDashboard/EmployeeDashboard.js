import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import "./EmployeeDashboard.css"; 
import NavBar from "../NavBar/NavBar";

const EmployeeDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [status, setStatus] = useState("loading");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        setStatus("loading");
        try {
            const response = await axios.get("https://backend-plum-iota-62.vercel.app/employees");
            setEmployees(response.data);
            setStatus("success");
        } catch (error) {
            console.error("Error fetching employees:", error);
            setStatus("error");
        }
    };

    const filteredEmployees = employees.filter((emp) =>
        emp._id.includes(searchTerm)||
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <NavBar/>
            <h1>Employee Dashboard</h1>
            <input
                type="text"
                placeholder="Search by Name, Department, or Position"
                className="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {status === "loading" ? (
                <div className="loader-container">
                    <Oval height={30} width={30} color="#0073e6" ariaLabel="loading" />
                    <p>Loading employees...</p>
                </div>
            ) : (
                <div className="employee-grid">
                    {filteredEmployees.length === 0 ? (
                        <p>No employees found.</p>
                    ) : (
                        filteredEmployees.map((emp) => (
                            <div key={emp.id} className="employee-card">
                                <h2>{emp.name}</h2>
                                <p><strong>Employee Id:</strong> {emp._id}</p>
                                <p><strong>Position:</strong> {emp.position}</p>
                                <p><strong>Email:</strong> {emp.email}</p>
                                <p><strong>Department:</strong> {emp.department}</p>
                                <p><strong>Salary:</strong> {emp.salary}</p>
                                <p><strong>Contact:</strong> {emp.contactNumber}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default EmployeeDashboard;
