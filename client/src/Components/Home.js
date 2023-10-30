import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import "./Home.css"
import './Scheduling.js';
import './DeliveryTracker.js';
// import {Chart} from 'chart.js';
// import { 
//     LineChart, 
//     ResponsiveContainer, 
//     Legend, Tooltip, 
//     Line, 
//     XAxis, 
//     YAxis, 
//     CartesianGrid 
// } from 'recharts';
import './Graph.js'
import Graph from './Graph.js';

const Home = () => {

    
    const [user, setUser] = useState({
        name: 'John Doe',
    });
    const pdata = [ 
        { 
            name: 'march', 
            fuel: 99, 
            fees: 120 
        }, 
        { 
            name: 'april', 
            fuel: 15, 
            fees: 12 
        }, 
        { 
            name: 'may', 
            fuel: 5, 
            fees: 10 
        }, 
        { 
            name: 'june', 
            fuel: 10, 
            fees: 5 
        }, 
        { 
            name: 'july', 
            fuel: 9, 
            fees: 4 
        }, 
        { 
            name: 'aug', 
            fuel: 10, 
            fees: 8 
        }, 
    ]; 

    const [state,setState]=useState({
        options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
        },
        series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
        ]
    }
    )

    return (
    
    <div className="main-container" >
        
       <div className="sidebar">
            <h1 className="sidebar-header">Dashboard</h1>
            <ul>
                
                <li className="dropdown">
                <li className="dropdown-btn">Vehicles<i className="fa fa-caret-down"></i></li>
                    <div className="dropdown-content">
                        <a href="/vehicles/bus">Bus</a>
                        <a href="/vehicles/truck">Truck</a>
                    </div>
                </li>
                <li>
                <Link to="/scheduling">Scheduling</Link>
                </li>
                <li>
                <Link to="/deliverytracker">DeliveryTracker</Link>
                </li>
                <li>
                <Link to="/livetracking">Live Tracking</Link>
                </li>
                <li>
                <Link to="/parking">Parking</Link>
                </li>
                <li>
                <Link to="/driver">Driver</Link>
                </li>
                <li>
                <Link to="/fuel-optimize">Fuel Optimize</Link>
                </li>
            </ul>
        </div>

        <div className="dashboard">
            <div className="dashboard-info">
                <h2>Fleet Management Benefits</h2>
                <ul>
                <li>Track your fleet in real time</li>
                <li>Manage your fleet efficiently</li>
                <li>Reduce costs</li>
                <li>Improve customer service</li>
                </ul>
            </div>
            <div className="dashboard-row">
                <div className="dashboard-card">
                    <div className="dashboard-card-graph">
                        {/* <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="250"
                        height="250"
                        /> */}
                    </div>
                </div>
            </div> 
            <div className="dashboard-row">
                <div className="dashboard-card">
                    <div className="dashboard-card-graph">
                            <Graph/>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    );
};

export default Home;
