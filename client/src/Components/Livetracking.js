// import React, { useState } from 'react';
// import axios from 'axios';

// const API_endpoint = `https://api.openweathermap.org/data/3.0/onecall?`;
// const API_key = '70353d78bbffa40f17c7687c5c4d91db';

// const Livetracking = () => {
//   const [latitude, setLatitude] = useState('');
//   const [longitude, setLongitude] = useState('');
//   const [responseData, setResponseData] = useState({});

//   React.useEffect(() => {
//     // Get the user's current latitude and longitude.
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLatitude(position.coords.latitude);
//       setLongitude(position.coords.longitude);
//     });

//     // Construct the final API endpoint URL.
//     const finalAPIEndPoint = `${API_endpoint}lat=${latitude}&long=${longitude}&exclude=hourly,daily&appid=${API_key}`;

//     // Make a GET request to the OpenWeatherMap API.
//     axios.get(finalAPIEndPoint).then((response) => {
//       // Update the `responseData` state variable with the response data.
//       setResponseData(response.data);
//     });
//   }, []);

//   // Render the current weather conditions for the user's location.
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Livetracking</h1>
//       <h2 style={{ textAlign: 'center' }}>{responseData.name}</h2>
//     </div>
//   );
// };

// export default Livetracking;


// Livetracking.js

import React from "react";
import './Livetracking.css';
const Livetracking = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089923568!2d77.46612624848429!3d12.953945614209811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698856131536!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Livetracking;