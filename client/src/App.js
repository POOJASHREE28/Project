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

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/*' element={<Signup/>}/> 
    <Route path='/login' element={<Login/>}/>  
    <Route path='/home' element={<Home/>}/> 
    <Route path='/scheduling' element={<Scheduling/>}/>
    <Route path='/deliverytracker' element={<DeliveryTracker/>}/>/
    <Route path='/livetracking' element={<Livetracking/>}/>.
    {/*<Route path='/' element={<Chart/>}/> */}
   
   </Routes>
   </BrowserRouter>

  );
}

export default App;

