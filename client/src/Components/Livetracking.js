import React, { useState } from 'react';
import axios from 'axios';

const API_endpoint = `https://api.openweathermap.org/data/3.0/onecall?`;
const API_key = '70353d78bbffa40f17c7687c5c4d91db';

const Livetracking = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [responseData, setResponseData] = useState({});

  React.useEffect(() => {
    // Get the user's current latitude and longitude.
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    // Construct the final API endpoint URL.
    const finalAPIEndPoint = `${API_endpoint}lat=${latitude}&long=${longitude}&exclude=hourly,daily&appid=${API_key}`;

    // Make a GET request to the OpenWeatherMap API.
    axios.get(finalAPIEndPoint).then((response) => {
      // Update the `responseData` state variable with the response data.
      setResponseData(response.data);
    });
  }, []);

  // Render the current weather conditions for the user's location.
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Livetracking</h1>
      <h2 style={{ textAlign: 'center' }}>{responseData.name}</h2>
    </div>
  );
};

export default Livetracking;
