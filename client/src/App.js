import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Livetracking from './Components/Livetracking';

// import Chart from './Components/Chart'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Scheduling from './Components/Scheduling';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    {/* <Route path='/' element={<Livetracking/>}/> */}
     <Route path='/*' element={<Signup/>}/> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/home' element={<Home/>}/> 
    <Route path='/scheduling' element={<Scheduling/>}/> 
    {/*<Route path='/' element={<Chart/>}/> */}
   
   </Routes>
   </BrowserRouter>

  );
}

export default App;
