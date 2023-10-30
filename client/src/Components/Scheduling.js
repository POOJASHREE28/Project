import React, { useState } from "react";

const Scheduling = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [busSchedulingInfo, setBusSchedulingInfo] = useState([
   
    {
        busId: 1,
        fromPlace: "Mysuru",
        toPlace: "Bengaluru",
        departureTime: "10:00 AM",
        routes: ["Mandya", "Channapatna", "Ramanagara"],
    },
    {
        busId: 2,
        fromPlace: "Bengaluru",
        toPlace: "Mangaluru",
        departureTime: "11:00 AM",
        routes: ["Hassan", "Shivamogga", "Udupi"],
    },
    {
        busId: 3,
        fromPlace: "Mysuru",
        toPlace: "Chennai",
        departureTime: "12:00 PM",
        routes: ["Chamarajanagar", "Madikeri", "Coorg"],
    },
    {
        busId: 4,
        fromPlace: "Bengaluru",
        toPlace: "Hyderabad",
        departureTime: "1:00 PM",
        routes: ["Koppal", "Bellary", "Gulbarga"],
    },
    {
        busId: 5,
        fromPlace: "Mysuru",
        toPlace: "Goa",
        departureTime: "2:00 PM",
        routes: ["Karkala", "Udupi", "Mangaluru"],
    },
    {
        busId: 6,
        fromPlace: "Mysuru",
        toPlace: "Chennai",
        departureTime: "12:00 PM",
        routes: ["Chamarajanagar", "Madikeri", "Coorg"],
      },
      {
        busId: 7,
        fromPlace: "Mysuru",
        toPlace: "Hyderabad",
        departureTime: "1:00 PM",
        routes: ["Koppal", "Bellary", "Gulbarga"],
      },
      {
        busId: 8,
        fromPlace: "Mysuru",
        toPlace: "Pune",
        departureTime: "2:00 PM",
        routes: ["Hassan", "Shivamogga", "Dharwad"],
      },
      {
        busId: 9,
        fromPlace: "Mysuru",
        toPlace: "Ahmedabad",
        departureTime: "3:00 PM",
        routes: ["Mandya", "Channapatna", "Ramanagara"],
      },
      {
        busId: 10,
        fromPlace: "Mysuru",
        toPlace: "Surat",
        departureTime: "4:00 PM",
        routes: ["Hunsur", "Periyapatna", "Madikeri"],
      },
      {
        busId: 11,
        fromPlace: "Bengaluru",
        toPlace: "Mangaluru",
        departureTime: "11:00 AM",
        routes: ["Hassan", "Shivamogga", "Udupi"],
      },
      {
        busId: 12,
        fromPlace: "Bengaluru",
        toPlace: "Chennai",
        departureTime: "12:00 PM",
        routes: ["Vellore", "Tiruppur", "Coimbatore"],
      },
      {
        busId: 13,
        fromPlace: "Bengaluru",
        toPlace: "Hyderabad",
        departureTime: "1:00 PM",
        routes: ["Anantapur", "Kurnool", "Mahabubnagar"],
      },
      {
        busId: 14,
        fromPlace: "Bengaluru",
        toPlace: "Pune",
        departureTime: "2:00 PM",
        routes: ["Chitradurga", "Davangere", "Hubli"],
      },
      {
        busId: 15,
        fromPlace: "Bengaluru",
        toPlace: "Ahmedabad",
        departureTime: "3:00 PM",
        routes: ["Kolar", "Chikkaballapura", "Siddipet"],
      },
      {
        busId: 16,
        fromPlace: "Bengaluru",
        toPlace: "Surat",
        departureTime: "4:00 PM",
        routes: ["Hassan", "Belagavi", "Surat"],
      },
      {
        busId: 17,
        fromPlace: "Mangaluru",
        toPlace: "Chennai",
        departureTime: "12:00 PM",
        routes: ["Udupi", "Kundapura", "Manipal"],
      },
      {
        busId: 18,
        fromPlace: "Mangaluru",
        toPlace: "Hyderabad",
        departureTime: "1:00 PM",
        routes: ["Goa", "Belagavi", "Hyderabad"],
      },
      {
        busId: 19,
        fromPlace: "Mangaluru",
        toPlace: "Pune",
        departureTime: "2:00 PM",
        routes: ["Udupi", "Shivamogga", "Pune"],
      },
      {
        busId: 20,
        fromPlace: "Mangaluru",
        toPlace: "Ahmedabad",
        departureTime: "3:00 PM",
        routes: ["Udupi", "Karwar", "Ahmedabad"],
      },
      {
        busId: 21,
        fromPlace: "Mangaluru",
        toPlace: "Surat",
        departureTime: "4:00 PM",
        routes: ["Udupi", "Gokarna", "Surat"]
      },
      {
        busId: 22,
        fromPlace: "Mysuru",
        toPlace: "Bengaluru",
        departureTime: "10:00 AM",
        routes: ["Mandya", "Channapatna", "Ramanagara"],
      },
      {
        busId: 23,
        fromPlace: "Bengaluru",
        toPlace: "Mangaluru",
        departureTime: "11:00 AM",
        routes: ["Hassan", "Shivamogga", "Udupi"],
      },
      
  ]);

  const handleSearch = () => {
    // Filter the busSchedulingInfo array based on the search term
    const filteredBusSchedulingInfo = busSchedulingInfo.filter((item) =>
      item.fromPlace.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    // Set the busSchedulingInfo state to the filtered array, but only keep the first row
    setBusSchedulingInfo(filteredBusSchedulingInfo);
  };

  const handleClear = () => {
    setSearchTerm("");
    setBusSchedulingInfo([
      // Add 25 dummy data here
    ]);
  };

  return (
    <div>
      <div className="top-section">
        <div className="name-grid">
          <h1>Bus Scheduling Information</h1>
        </div>
        <div className="search-bar-grid">
          <input
            type="text"
            placeholder="Search by from place or to place"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>
            Search
          </button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Bus ID</th>
              <th>From Place</th>
              <th>To Place</th>
              <th>Departure Time</th>
              <th>Routes</th>
            </tr>
          </thead>
          <tbody>
            {busSchedulingInfo.map((item) => (
              <tr key={item.busId}>
                <td>{item.busId}</td>
                <td>{item.fromPlace}</td>
                <td>{item.toPlace}</td>
                <td>{item.departureTime}</td>
                <td>{item.routes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scheduling;
