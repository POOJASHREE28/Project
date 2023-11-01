import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import "./Home.css"
import './Scheduling.js';
import './DeliveryTracker.js';
import Graph from './Graph.js';
import './Driverlist'
import './FuelOptimisation'
// import './Park'
const Home = () => {


    return (
    
    <div className="main-container" >
        
       <div className="sidebar">
            <h1 className="sidebar-header">Dashboard</h1>
            <ul>
                {/* <li className="dropdown">
                <li>Vehicles</li>
                    <div className="dropdown-content">
                        <a href="/vehicles/bus">Bus</a>
                        <a href="/vehicles/truck">Truck</a>
                    </div>
           
                </li> */}
                <li>
                <Link to="/scheduling">Scheduling</Link>
                </li>
                <li>
                <Link to="/deliverytracker">DeliveryTracker</Link>
                </li>
                <li>
                <Link to="/livetracking">Live Tracking</Link>
                </li>
                {/* <li>
                <Link to="/park">Parking</Link>
                </li> */}
                <li>
                <Link to="/driverlist">Driver</Link>
                </li>
                <li>
                <Link to="/fueloptimisation">Fuel Optimize</Link>
                </li>
            </ul>
        </div>

        <div className="dashboard">
            <div className="dashboard-info">
                <h2>Fleet Management Benefits</h2>
            </div>
            <div className="dashboard-card">
                <Graph/>
                {/* <div className="dashboard-body">
                    <div className="dashboard-card-graph">
                    <Graph/>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
};

export default Home;
