import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import Scheduling from './Scheduling';
import DeliveryTracker from './DeliveryTracker';
import Graph from './Graph.js';
import Driverlist from './Driverlist';
import FuelOptimisation from './FuelOptimisation'; 
import Livetracking from './Livetracking';
import ParkingApp from './ParkingApp';

const Home = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const renderPage = () => {
    switch (selectedPage) {
      case 'scheduling':
        return <Scheduling />;
      case 'deliverytracker':
        return <DeliveryTracker />;
      case 'livetracking':
        return <Livetracking />;
      case 'driverlist':
        return <Driverlist />;
      case 'fueloptimisation':
        return <FuelOptimisation />;
      case 'parkingapp':
        return <ParkingApp />;
      default:
        return <Graph />;
    }
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>
            <Link to="/scheduling" onClick={() => setSelectedPage('scheduling')}>Scheduling</Link>
          </li>
          <li>
            <Link to="/deliverytracker" onClick={() => setSelectedPage('deliverytracker')}>DeliveryTracker</Link>
          </li>
          <li>
            <Link to="/Livetracking" onClick={() => setSelectedPage('livetracking')}>Livetracking</Link>
          </li>
          <li>
            <Link to="/driverlist" onClick={() => setSelectedPage('driverlist')}>Driverlist</Link>
          </li>
          <li>
            <Link to="/fueloptimisation" onClick={() => setSelectedPage('fueloptimisation')}>FuelOptimisation</Link>
          </li>
          <li>
            <Link to="/parkingapp" onClick={() => setSelectedPage('parkingapp')}>Parking</Link>
          </li>
        </ul>
      </div>

      <div className="dashboard">
        <div className="dashboard-info">
          <h2>Fleet Management Benefits</h2>
        </div>
        <div className="dashboard-card">
          <div className="page-content-container">
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
