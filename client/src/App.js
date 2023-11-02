import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';


import Scheduling from './Components/Scheduling';
import DeliveryTracker from './Components/DeliveryTracker';
import Livetracking from './Components/Livetracking';
import Driverlist from './Components/Driverlist';
import FuelOptimisation from './Components/FuelOptimisation';
import ParkingApp from './Components/ParkingApp';
// import Park from './Components/Park';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/*' element={<Signup/>}/> 
    <Route path='/login' element={<Login/>}/>  
    <Route path='/home' element={<Home/>}/> 
    <Route path='/scheduling' element={<Scheduling/>}/>
    <Route path='/deliverytracker' element={<DeliveryTracker/>}/>/
    <Route path='/livetracking' element={<Livetracking/>}/>
    <Route path='/driverlist' element={<Driverlist/>}/>
   {/* <Route path='/park' element={<Park/>}/> */}
   <Route path='/fueloptimisation' element={<FuelOptimisation/>}/>
   <Route path='parkingapp' element={<ParkingApp/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;

