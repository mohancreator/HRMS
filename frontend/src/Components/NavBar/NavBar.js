import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-con">
      <Link className='nav-link' to='/'><h1 className="logo">HRMS</h1></Link>
      <div className="nav-links">
        <Link className="nav-link" to='/employees'><span>Employees</span></Link>
        <Link className='nav-link' to='/leaves'><span>Leaves</span></Link>
      </div>
    </nav>
  );
};

export default NavBar;
