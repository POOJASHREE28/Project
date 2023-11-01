import React, { useState } from 'react';
import './ParkingApp.css';

const ParkingApp = () => {
  const [parkingSlots, setParkingSlots] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      occupied: false,
      vehicle: null,
    }))
  );

  const vehicleTypes = ['Truck', 'Bus']; // Add more types as needed

  const assignParkingSlot = () => {
    // Get unoccupied parking slots
    const unoccupiedSlots = parkingSlots.filter(slot => !slot.occupied);

    if (unoccupiedSlots.length === 0) {
      alert('All parking slots are occupied!');
      return;
    }

    // Randomly select a parking slot
    const randomIndex = Math.floor(Math.random() * unoccupiedSlots.length);
    const selectedSlot = unoccupiedSlots[randomIndex];

    // Randomly generate vehicle details
    const randomVehicleType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
    const randomVehicleNumber = generateRandomNumber();
    const randomLocation = generateRandomLocation();
    const randomArea = generateRandomArea();

    const selectedVehicle = {
      type: randomVehicleType,
      number: randomVehicleNumber,
      location: randomLocation,
      area: randomArea,
    };

    // Update the state to mark the slot as occupied and assign the vehicle
    setParkingSlots(prevSlots =>
      prevSlots.map(slot =>
        slot.id === selectedSlot.id
          ? { ...slot, occupied: true, vehicle: selectedVehicle }
          : slot
      )
    );

    alert(`Assigned ${selectedVehicle.type} (${selectedVehicle.number}) to Parking Slot ${selectedSlot.id} in ${selectedVehicle.area}, ${selectedVehicle.location}`);
  };

  // Helper function to generate a random number
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  };

  // Helper function to generate a random location
  const generateRandomLocation = () => {
    const locations = ['North', 'South', 'East', 'West'];
    return locations[Math.floor(Math.random() * locations.length)];
  };

  // Helper function to generate a random area
  const generateRandomArea = () => {
    const areas = ['A', 'B', 'C', 'D'];
    return areas[Math.floor(Math.random() * areas.length)];
  };

  return (
    <div className="parking-app-container">
      <h2 className="center-text">Parking Management System</h2>
      <div className="center-button">
        <button onClick={assignParkingSlot}>Assign Parking Slot</button>
      </div>
      <div className="center-text">
        <h3>Parking Slots</h3>
        <ul className="parking-slots">
          {parkingSlots.map(slot => (
            <li key={slot.id} className="parking-slot">
              Parking Slot {slot.id} - {slot.occupied ? 'Occupied' : 'Vacant'}
              {slot.occupied && (
                <span> | Vehicle: {slot.vehicle ? `${slot.vehicle.type} (number${slot.vehicle.number})` : 'Unknown'}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParkingApp;
