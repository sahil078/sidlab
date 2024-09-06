import React from 'react';
import '../styles/Dashboard.css'; 
import sidlab from "../image/sidlab.png";

function Dashboard() {
    return (
        <div className="dashboard-container">
            {/* Navbar Section */}
            <header className="dashboard-header">
                <div className="logo">
                    <img src={sidlab} alt="SidLabs" className="logo-image" />
                </div>
                <nav className="dashboard-nav">
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#projects">Flagship Projects</a></li>
                        <li><a href="#contact">Contact Now</a></li>
                    </ul>
                </nav>
            </header>

            {/* Background Image and Text Section */}
            <div className="dashboard-banner">
                <div className="banner-text">
                    <h1>A Venture Studio</h1>
                    <p>Advancing Human Intelligence Through Innovation</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
