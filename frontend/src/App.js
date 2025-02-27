import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EmployeeDashboard from "./Components/EmployeeDashboard/EmployeeDashboard";
import LeaveDashboard from "./Components/LeavesDashboard/LeavesDashboard";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/employees" Component={EmployeeDashboard}/>
        <Route path="/leaves" Component={LeaveDashboard} />
      </Routes>
    </Router>
  );
}

export default App;
