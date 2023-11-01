import React from 'react';
import './Card.css';

const Card = ({ driverName, contactDetails, vehicleId, dutyTiming, backgroundColor }) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <h3 className="card-header">Driver Name: {driverName}</h3>
      <div className="card-body">
        <p>Contact Details: {contactDetails}</p>
        <p>Vehicle ID: {vehicleId}</p>
        <p>Duty Timing: {dutyTiming}</p>
      </div>
    </div>
  );
};

const Driverlist = () => {
  const drivers = [
    {
      driverName: 'John Smith',
      contactDetails: '+1-555-555-5555',
      vehicleId: 'ABC123',
      dutyTiming: '8am - 5pm',
      backgroundColor: '#00FFFF',
    },
    {
      driverName: 'Jane Doe',
      contactDetails: '+1-555-555-5556',
      vehicleId: 'DEF456',
      dutyTiming: '6am - 3pm',
      backgroundColor: '#888888',
    },
    {
      driverName: 'Peter Jones',
      contactDetails: '+1-555-555-5557',
      vehicleId: 'GHI789',
      dutyTiming: '10am - 7pm',
      backgroundColor: '#00ffd5',
    },
    {
      driverName: 'Susan Williams',
      contactDetails: '+1-555-555-5558',
      vehicleId: 'JKL012',
      dutyTiming: '12pm - 9pm',
      backgroundColor: '#ff9500',
    },
    {
      driverName: 'Robert Brown',
      contactDetails: '+1-555-555-5559',
      vehicleId: 'MNO345',
      dutyTiming: '5am - 12pm',
      backgroundColor: '#FFFFFF',
    },
    {
      driverName: 'Mary Johnson',
      contactDetails: '+1-555-555-5560',
      vehicleId: 'PQR678',
      dutyTiming: '4pm - 11pm',
      backgroundColor: '#00FFFF',
    },
    {
        driverName: 'Jane Doe',
        contactDetails: '+1-555-555-5556',
        vehicleId: 'DEF456',
        dutyTiming: '6am - 3pm',
        backgroundColor: '#888888',
      },
      {
        driverName: 'Peter Jones',
        contactDetails: '+1-555-555-5557',
        vehicleId: 'GHI789',
        dutyTiming: '10am - 7pm',
        backgroundColor: '#00ffd5',
      },
      {
        driverName: 'Susan Williams',
        contactDetails: '+1-555-555-5558',
        vehicleId: 'JKL012',
        dutyTiming: '12pm - 9pm',
        backgroundColor: '#ff9500',
      },
      {
        driverName: 'Robert Brown',
        contactDetails: '+1-555-555-5559',
        vehicleId: 'MNO345',
        dutyTiming: '5am - 12pm',
        backgroundColor: '#FFFFFF',
      },
      {
        driverName: 'Mary Johnson',
        contactDetails: '+1-555-555-5560',
        vehicleId: 'PQR678',
        dutyTiming: '4pm - 11pm',
        backgroundColor: '#00FFFF',
      },
      {
        driverName: 'David Williams',
        contactDetails: '+1-555-555-5561',
        vehicleId: 'STU901',
        dutyTiming: '9am - 6pm',
        backgroundColor: '#888888',
      },
      {
        driverName: 'Sarah Jones',
        contactDetails: '+1-555-555-5562',
        vehicleId: 'VWX123',
        dutyTiming: '1pm - 10pm',
        backgroundColor: '#00ffd5',
      },
      {
        driverName: 'Michael Brown',
        contactDetails: '+1-555-555-5563',
        vehicleId: 'YZ456',
        dutyTiming: '7am - 4pm',
        backgroundColor: '#ff9500',
      },
      {
        driverName: 'Lisa Smith',
        contactDetails: '+1-555-555-5564',
        vehicleId: 'ABC789',
        dutyTiming: '11am - 8pm',
        backgroundColor: '#FFFFFF',
      },
        {
          driverName: 'Driver 1 Name',
          contactDetails: '+1-555-555-5551',
          vehicleId: 'ABC123',
          dutyTiming: '8am - 5pm',
          backgroundColor: '#00FFFF',
        },
        {
          driverName: 'Driver 2 Name',
          contactDetails: '+1-555-555-5552',
          vehicleId: 'DEF456',
          dutyTiming: '6am - 3pm',
          backgroundColor: '#888888',
        },
        {
          driverName: 'Driver 3 Name',
          contactDetails: '+1-555-555-5553',
          vehicleId: 'GHI789',
          dutyTiming: '9am - 6pm',
          backgroundColor: '#FFA500',
        },
        {
          driverName: 'Driver 4 Name',
          contactDetails: '+1-555-555-5554',
          vehicleId: 'JKL012',
          dutyTiming: '7am - 4pm',
          backgroundColor: '#FF4500',
        },
        {
          driverName: 'Driver 5 Name',
          contactDetails: '+1-555-555-5555',
          vehicleId: 'MNO345',
          dutyTiming: '10am - 7pm',
          backgroundColor: '#008000',
        },
        {
          driverName: 'Driver 6 Name',
          contactDetails: '+1-555-555-5556',
          vehicleId: 'PQR678',
          dutyTiming: '8am - 5pm',
          backgroundColor: '#9932CC',
        },
        {
          driverName: 'Driver 7 Name',
          contactDetails: '+1-555-555-5557',
          vehicleId: 'STU901',
          dutyTiming: '6am - 3pm',
          backgroundColor: '#FF6347',
        },
        {
          driverName: 'Driver 8 Name',
          contactDetails: '+1-555-555-5558',
          vehicleId: 'VWX234',
          dutyTiming: '9am - 6pm',
          backgroundColor: '#00FF7F',
        },
        {
          driverName: 'Driver 9 Name',
          contactDetails: '+1-555-555-5559',
          vehicleId: 'YZA567',
          dutyTiming: '7am - 4pm',
          backgroundColor: '#8B008B',
        },
        {
          driverName: 'Driver 10 Name',
          contactDetails: '+1-555-555-5560',
          vehicleId: 'BCD890',
          dutyTiming: '10am - 7pm',
          backgroundColor: '#DC143C',
        },
        {
          driverName: 'Driver 11 Name',
          contactDetails: '+1-555-555-5561',
          vehicleId: 'EFG123',
          dutyTiming: '8am - 5pm',
          backgroundColor: '#FFD700',
        },
        {
          driverName: 'Driver 12 Name',
          contactDetails: '+1-555-555-5562',
          vehicleId: 'HIJ456',
          dutyTiming: '6am - 3pm',
          backgroundColor: '#008080',
        },
        {
          driverName: 'Driver 13 Name',
          contactDetails: '+1-555-555-5563',
          vehicleId: 'KLM789',
          dutyTiming: '9am - 6pm',
          backgroundColor: '#FF00FF',
        },
        {
          driverName: 'Driver 14 Name',
          contactDetails: '+1-555-555-5564',
          vehicleId: 'NOP012',
          dutyTiming: '7am - 4pm',
          backgroundColor: '#800000',
        },
        {
          driverName: 'Driver 15 Name',
          contactDetails: '+1-555-555-5565',
          vehicleId: 'QRS345',
          dutyTiming: '10am - 7pm',
          backgroundColor: '#4B0082',
        },
        {
          driverName: 'Driver 16 Name',
          contactDetails: '+1-555-555-5566',
          vehicleId: 'TUV678',
          dutyTiming: '8am - 5pm',
          backgroundColor: '#8B0000',
        },
        {
          driverName: 'Driver 17 Name',
          contactDetails: '+1-555-555-5567',
          vehicleId: 'WXY901',
          dutyTiming: '6am - 3pm',
          backgroundColor: '#000080',
        },
        {
          driverName: 'Driver 18 Name',
          contactDetails: '+1-555-555-5568',
          vehicleId: 'ZAB234',
          dutyTiming: '9am - 6pm',
          backgroundColor: '#20B2AA',
        },
        {
          driverName: 'Driver 19 Name',
          contactDetails: '+1-555-555-5569',
          vehicleId: 'CDE567',
          dutyTiming: '7am - 4pm',
          backgroundColor: '#008B8B',
        },
        {
          driverName: 'Driver 20 Name',
          contactDetails: '+1-555-555-5570',
          vehicleId: 'FGH890',
          dutyTiming: '10am - 7pm',
          backgroundColor: '#2E8B57',
        },
        {
          driverName: 'Driver 21 Name',
          contactDetails: '+1-555-555-5571',
          vehicleId: 'IJK123',
          dutyTiming: '8am - 5pm',
          backgroundColor: '#FF1493',
        },
        {
          driverName: 'Driver 22 Name',
          contactDetails: '+1-555-555-5572',
          vehicleId: 'LMN456',
          dutyTiming: '6am - 3pm',
          backgroundColor: '#800080',
        },
        {
          driverName: 'Driver 23 Name',
          contactDetails: '+1-555-555-5573',
          vehicleId: 'OPQ789',
          dutyTiming: '9am - 6pm',
          backgroundColor: '#8A2BE2',
        },
        {
          driverName: 'Driver 24 Name',
          contactDetails: '+1-555-555-5574',
          vehicleId: 'RST012',
          dutyTiming: '7am - 4pm',
          backgroundColor: '#FF4500',
        },
        {
          driverName: 'Driver 25 Name',
          contactDetails: '+1-555-555-5575',
          vehicleId: 'UVW345',
          dutyTiming: '10am - 7pm',
          backgroundColor: '#32CD32',
        },
        {
          driverName: 'Driver 26 Name',
          contactDetails: '+1-555-555-5576',
          vehicleId: 'XYZ678',
          dutyTiming: '8am - 5pm',
          backgroundColor: '#40E0D0',
        },
        {
          driverName: 'Driver 27 Name',
          contactDetails: '+1-555-555-5577',
          vehicleId: 'ABC901',
          dutyTiming: '7am - 4pm',
          backgroundColor: '#4B0082',
        }  ,
        
        
      
  ];

  return (
    <div className="card-list">
      {drivers.map((driver, index) => {
        return (
          <Card
            key={index}
            driverName={driver.driverName}
            contactDetails={driver.contactDetails}
            vehicleId={driver.vehicleId}
            dutyTiming={driver.dutyTiming}
            backgroundColor={driver.backgroundColor}
          />
        );
      })}
    </div>
  );
};

export default Driverlist;
