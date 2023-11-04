import React, { useState } from "react";
import Data from "./Data.json";

const Scheduling = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [busSchedulingInfo, setBusSchedulingInfo] = useState(Data);

  const handleSearch = () => {
    // Filter the busSchedulingInfo array based on the search term
    const filteredBusSchedulingInfo = busSchedulingInfo.filter((item) =>
      item.to.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Set the busSchedulingInfo state to the filtered array
    setBusSchedulingInfo(filteredBusSchedulingInfo);
  };

  const handleClear = () => {
    setSearchTerm("");
    setBusSchedulingInfo(Data);
  };

  // Add a new function to generate the bus number column
  const generateBusNumberColumn = () => {
    return (
      <th key="busNumber">Bus Number</th>
    );
  };

  // Add the bus number column to the table header
  const tableHeader = <tr>
    <th>ID</th>
    <th>Bus Number</th>
    <th>From Place</th>
    <th>To Place</th>
    <th>Departure Time</th>
    <th>Routes</th>
  </tr>;

  // Add the bus number column to the table body
  const tableBody = busSchedulingInfo.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.busNumber}</td>
      <td>{item.from}</td>
      <td>{item.to}</td>
      <td>{item.departureTime}</td>
      <td>{item.routes.join(", ")}</td>
    </tr>
  ));

  return (
    <div>
      <div className="top-section">
        <div className="name-grid">
          <h1>Bus Scheduling Information</h1>
        </div>
        <div className="search-bar-grid">
          <input
            type="text"
            placeholder="Search"
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
          <thead>{tableHeader}</thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Scheduling;
