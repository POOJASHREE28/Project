import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Checkbox from 'react-bootstrap/Checkbox';

const Park= () => {
  const [parkingSlots, setParkingSlots] = useState([
    { place: 'A1', total: 10, available: 10, checked: false },
    { place: 'A2', total: 10, available: 10, checked: false },
    { place: 'A3', total: 10, available: 10, checked: false },
    { place: 'A4', total: 10, available: 10, checked: false },
    { place: 'B1', total: 10, available: 10, checked: false },
  ]);

  const handleCheckboxChange = (place, checked) => {
    const newParkingSlots = parkingSlots.map((parkingSlot) => {
      if (parkingSlot.place === place) {
        return {
          ...parkingSlot,
          checked,
          available: checked ? parkingSlot.available - 1 : parkingSlot.available + 1,
        };
      }
      return parkingSlot;
    });

    setParkingSlots(newParkingSlots);
  };

  return (
    <div>
      <h1>Parking</h1>
      <section>
        <h3>Name: Parking</h3>
      </section>
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Place</th>
              <th>Total</th>
              <th>Available</th>
              <th>Occupied</th>
            </tr>
          </thead>
          <tbody>
            {parkingSlots.map((parkingSlot) => (
              <tr key={parkingSlot.place}>
                <td>{parkingSlot.place}</td>
                <td>{parkingSlot.total}</td>
                <td>{parkingSlot.available}</td>
                <td><Checkbox checked={parkingSlot.checked} onChange={(e) => handleCheckboxChange(parkingSlot.place, e.target.checked)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Park;
