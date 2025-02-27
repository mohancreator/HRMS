import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Home.css"; // Ensure you have styles for better UI

const Home = () => {
    // Memoize the greeting message to optimize performance
    const greeting = useMemo(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) return "Good Morning! ☀️";
        if (currentHour < 18) return "Good Afternoon! 🌤️";
        return "Good Evening! 🌙";
    }, []);

    return (
        <div>
            <NavBar />
            <div className="home-container">
                <h2>{greeting}</h2>
                <p>Welcome to your dashboard. Have a great day ahead! 😊</p>
                <img className="img" src='https://blog.darwinbox.com/hubfs/Rid%20Yourself%20of%20Repetitive%20and%20Recurring%20HR%20Tasks_%20HRMS%20System%20Implementation.jpg' alt='g-img'/>
                <div className="button-container">
                    <Link to="/employees"><button className="home-button">View Employees</button></Link>
                    <Link to="/leaves"><button className="home-button">View Leave or Request Leave</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
