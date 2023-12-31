import React, { useState } from 'react';
import './Delivary.css';

const DeliveryTracker = () => {
  const Data=[
    {
      name: "John Doe",
      trackingNumber: "1234567890",
      deliveryStatus: "In transit",
      deliveryDate: "2023-10-31",
    },
    {
      name: "Jane Doe",
      trackingNumber: "9876543210",
      deliveryStatus: "Delivered",
      deliveryDate: "2023-10-29",
    },
    {
      name: "Peter Parker",
      trackingNumber: "1111111111",
      deliveryStatus: "Out for delivery",
      deliveryDate: "2023-10-30",
    },
    {
      name: "Mary Jane Watson",
      trackingNumber: "2222222222",
      deliveryStatus: "Pending",
      deliveryDate: "2023-11-01",
    },
    {
      name: "Bruce Wayne",
      trackingNumber: "3333333333",
      deliveryStatus: "Picked up",
      deliveryDate: "2023-10-28",
    },
    {
      name: "Clark Kent",
      trackingNumber: "4444444444",
      deliveryStatus: "In transit",
      deliveryDate: "2023-10-31",
    },
    {
      name: "Diana Prince",
      trackingNumber: "5555555555",
      deliveryStatus: "Delivered",
      deliveryDate: "2023-10-29",
    },
    {
      name: "Steve Rogers",
      trackingNumber: "6666666666",
      deliveryStatus: "Out for delivery",
      deliveryDate: "2023-10-30",
    },
    {
      name: "Bucky Barnes",
      trackingNumber: "7777777777",
      deliveryStatus: "Pending",
      deliveryDate: "2023-11-01",
    },
    {
      name: "Natasha Romanoff",
      trackingNumber: "8888888888",
      deliveryStatus: "Picked up",
      deliveryDate: "2023-10-28",
    },
    {
      name: "Tony Stark",
      trackingNumber: "9999999999",
      deliveryStatus: "In transit",
      deliveryDate: "2023-10-31",
    },
    {
      name: "Wanda Maximoff",
      trackingNumber: "101010101010",
      deliveryStatus: "Delivered",
      deliveryDate: "2023-10-29",
    },
    {
      name: "Vision",
      trackingNumber: "111111111111",
      deliveryStatus: "Out for delivery",
      deliveryDate: "2023-10-30",
    },
    {
      name: "Sam Wilson",
      trackingNumber: "121212121212",
      deliveryStatus: "Pending",
      deliveryDate: "2023-11-01",
    },
    {
      name: "Loki",
      trackingNumber: "131313131313",
      deliveryStatus: "Picked up",
      deliveryDate: "2023-10-28",
    },
    {
      name: "Thor Odinson",
      trackingNumber: "141414141414",
      deliveryStatus: "In transit",
      deliveryDate: "2023-10-31",
    },
    {
      name: "Stephen Strange",
      trackingNumber: "151515151515",
      deliveryStatus: "Delivered",
      deliveryDate: "2023-10-29",
    },
    {
      name: "Gamora",
      trackingNumber: "161616161616",
      deliveryStatus: "Out for delivery",
      deliveryDate: "2023-10-30",
    },{
      name: "Drax the Destroyer",
      trackingNumber: "171717171717",
      deliveryStatus: "Pending",
      deliveryDate: "2023-11-01",
    },
    {
      name: "Rocket Raccoon",
      trackingNumber: "181818181818",
      deliveryStatus: "Picked up",
      deliveryDate: "2023-10-28",
    },
    {
      name: "Pooja",
      trackingNumber: "191919191919",
      deliveryStatus: "In transit",
      deliveryDate: "2023-10-31",
    },
    {
      name: "Mantis",
      trackingNumber: "202020202020",
      deliveryStatus: "Delivered",
      deliveryDate: "2023-10-29",
    },
    {
      name: "Nebula",
      trackingNumber: "212121212121",
      deliveryStatus: "Out for delivery",
      deliveryDate: "2023-10-30",
    },
    {
      name: "Yelena Belova",
      trackingNumber: "222222222222",
      deliveryStatus: "Pending",
      deliveryDate: "2023-11-01",
    },
    {
      name: "Kate Bishop",
      trackingNumber: "232323232323",
      deliveryStatus: "Picked up",
      deliveryDate: "2023-10-28",
    },
    {
      name: "Hailee Steinfeld",
      trackingNumber: "242424242424",
      deliveryStatus: "In transit",
      deliveryDate: "2023-10-31",
    },
    {
      name: "Jeremy Renner",
      trackingNumber: "252525252525",
      deliveryStatus: "Delivered",
      deliveryDate: "2023-10-29",
    },
      {
        "name": "John Doe",
        "trackingNumber": "1234567890",
        "deliveryStatus": "Delivered",
        "deliveryDate": "2023-10-29"
      },
      {
        "name": "Jane Doe",
        "trackingNumber": "9876543210",
        "deliveryStatus": "Out for delivery",
        "deliveryDate": "2023-10-30"
      },
      {
        "name": "Peter Parker",
        "trackingNumber": "1111111111",
        "deliveryStatus": "Pending",
        "deliveryDate": "2023-11-01"
      },
  
      {
        "name": "Alice Miller",
        "trackingNumber": "RST091",
        "deliveryStatus": "Delivered",
        "deliveryDate": "2023-10-29"
      },
      {
        "name": "David Green",
        "trackingNumber": "UVW234",
        "deliveryStatus": "Out for delivery",
        "deliveryDate": "2023-10-30"
      },
      {
        "name": "Sarah Jones",
        "trackingNumber": "ABC890",
        "deliveryStatus": "Picked up",
        "deliveryDate": "2023-10-28"
      },
      {
        "name": "Michael Williams",
        "trackingNumber": "DEF012",
        "deliveryStatus": "Delivered",
        "deliveryDate": "2023-10-29"
      },
      {
        "name": "Elizabeth Brown",
        "trackingNumber": "GHI345",
        "deliveryStatus": "Out for delivery",
        "deliveryDate": "2023-10-30"
      },
      {
        "name": "William Johnson",
        "trackingNumber": "JKL678",
        "deliveryStatus": "Pending",
        "deliveryDate": "2023-11-01"
      },
      {
        "name": "Mary Johnson",
        "trackingNumber": "MNO901",
        "deliveryStatus": "Picked up",
        "deliveryDate": "2023-10-28"
      },
      {
        "name": "James Miller",
        "trackingNumber": "PQR012",
        "deliveryStatus": "In transit",
        "deliveryDate": "2023-10-31"
      },
      {
        "name": "Charles Green",
        "trackingNumber": "UVW345",
        "deliveryStatus": "Delivered",
        "deliveryDate": "2023-10-29"
      },
      {
        "name": "Robert Brown",
        "trackingNumber": "XYZ678",
        "deliveryStatus": "Out for delivery",
        "deliveryDate": "2023-10-30"
      },
      {
        "name": "Mary Jane Watson",
        "trackingNumber": "2222222222",
        "deliveryStatus": "Picked up",
        "deliveryDate": "2023-10-28"
      }
  ]
  const [searchTerm, setSearchTerm] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState(Data);

  const handleSearch = () => {
    // Filter the deliveryInfo array based on the search term
    const filteredDeliveryInfo = Data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    // Set the deliveryInfo state variable to the filtered results
    setDeliveryInfo(filteredDeliveryInfo);
  };

  const handleClear = () => {
    setSearchTerm('');
    setDeliveryInfo(Data);
  };

  return (
    <div>
      <div className="top-section">
        <div className="name-grid">
          <h1>Delivery Information</h1>
        </div>
        <div className="search-bar-grid">
          <input
            type="text"
            placeholder="Search by name or tracking number"
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
              <th>Name</th>
              <th>Delivery Status</th>
              <th>Tracking Number</th>
              <th>Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {deliveryInfo.map((item) => (
              <tr key={item.trackingNumber}>
                <td>{item.name}</td>
                <td>{item.deliveryStatus}</td>
                <td>{item.trackingNumber}</td>
                <td>{item.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryTracker;

























// import React, { useState } from "react";
// import './Delivary.css';
// const DeliveryTracker = () => {
//   const Data=[
//     {
//       name: "John Doe",
//       trackingNumber: "1234567890",
//       deliveryStatus: "In transit",
//       deliveryDate: "2023-10-31",
//     },
//     {
//       name: "Jane Doe",
//       trackingNumber: "9876543210",
//       deliveryStatus: "Delivered",
//       deliveryDate: "2023-10-29",
//     },
//     {
//       name: "Peter Parker",
//       trackingNumber: "1111111111",
//       deliveryStatus: "Out for delivery",
//       deliveryDate: "2023-10-30",
//     },
//     {
//       name: "Mary Jane Watson",
//       trackingNumber: "2222222222",
//       deliveryStatus: "Pending",
//       deliveryDate: "2023-11-01",
//     },
//     {
//       name: "Bruce Wayne",
//       trackingNumber: "3333333333",
//       deliveryStatus: "Picked up",
//       deliveryDate: "2023-10-28",
//     },
//     {
//       name: "Clark Kent",
//       trackingNumber: "4444444444",
//       deliveryStatus: "In transit",
//       deliveryDate: "2023-10-31",
//     },
//     {
//       name: "Diana Prince",
//       trackingNumber: "5555555555",
//       deliveryStatus: "Delivered",
//       deliveryDate: "2023-10-29",
//     },
//     {
//       name: "Steve Rogers",
//       trackingNumber: "6666666666",
//       deliveryStatus: "Out for delivery",
//       deliveryDate: "2023-10-30",
//     },
//     {
//       name: "Bucky Barnes",
//       trackingNumber: "7777777777",
//       deliveryStatus: "Pending",
//       deliveryDate: "2023-11-01",
//     },
//     {
//       name: "Natasha Romanoff",
//       trackingNumber: "8888888888",
//       deliveryStatus: "Picked up",
//       deliveryDate: "2023-10-28",
//     },
//     {
//       name: "Tony Stark",
//       trackingNumber: "9999999999",
//       deliveryStatus: "In transit",
//       deliveryDate: "2023-10-31",
//     },
//     {
//       name: "Wanda Maximoff",
//       trackingNumber: "101010101010",
//       deliveryStatus: "Delivered",
//       deliveryDate: "2023-10-29",
//     },
//     {
//       name: "Vision",
//       trackingNumber: "111111111111",
//       deliveryStatus: "Out for delivery",
//       deliveryDate: "2023-10-30",
//     },
//     {
//       name: "Sam Wilson",
//       trackingNumber: "121212121212",
//       deliveryStatus: "Pending",
//       deliveryDate: "2023-11-01",
//     },
//     {
//       name: "Loki",
//       trackingNumber: "131313131313",
//       deliveryStatus: "Picked up",
//       deliveryDate: "2023-10-28",
//     },
//     {
//       name: "Thor Odinson",
//       trackingNumber: "141414141414",
//       deliveryStatus: "In transit",
//       deliveryDate: "2023-10-31",
//     },
//     {
//       name: "Stephen Strange",
//       trackingNumber: "151515151515",
//       deliveryStatus: "Delivered",
//       deliveryDate: "2023-10-29",
//     },
//     {
//       name: "Gamora",
//       trackingNumber: "161616161616",
//       deliveryStatus: "Out for delivery",
//       deliveryDate: "2023-10-30",
//     },{
//       name: "Drax the Destroyer",
//       trackingNumber: "171717171717",
//       deliveryStatus: "Pending",
//       deliveryDate: "2023-11-01",
//     },
//     {
//       name: "Rocket Raccoon",
//       trackingNumber: "181818181818",
//       deliveryStatus: "Picked up",
//       deliveryDate: "2023-10-28",
//     },
//     {
//       name: "Pooja",
//       trackingNumber: "191919191919",
//       deliveryStatus: "In transit",
//       deliveryDate: "2023-10-31",
//     },
//     {
//       name: "Mantis",
//       trackingNumber: "202020202020",
//       deliveryStatus: "Delivered",
//       deliveryDate: "2023-10-29",
//     },
//     {
//       name: "Nebula",
//       trackingNumber: "212121212121",
//       deliveryStatus: "Out for delivery",
//       deliveryDate: "2023-10-30",
//     },
//     {
//       name: "Yelena Belova",
//       trackingNumber: "222222222222",
//       deliveryStatus: "Pending",
//       deliveryDate: "2023-11-01",
//     },
//     {
//       name: "Kate Bishop",
//       trackingNumber: "232323232323",
//       deliveryStatus: "Picked up",
//       deliveryDate: "2023-10-28",
//     },
//     {
//       name: "Hailee Steinfeld",
//       trackingNumber: "242424242424",
//       deliveryStatus: "In transit",
//       deliveryDate: "2023-10-31",
//     },
//     {
//       name: "Jeremy Renner",
//       trackingNumber: "252525252525",
//       deliveryStatus: "Delivered",
//       deliveryDate: "2023-10-29",
//     },
//       {
//         "name": "John Doe",
//         "trackingNumber": "1234567890",
//         "deliveryStatus": "Delivered",
//         "deliveryDate": "2023-10-29"
//       },
//       {
//         "name": "Jane Doe",
//         "trackingNumber": "9876543210",
//         "deliveryStatus": "Out for delivery",
//         "deliveryDate": "2023-10-30"
//       },
//       {
//         "name": "Peter Parker",
//         "trackingNumber": "1111111111",
//         "deliveryStatus": "Pending",
//         "deliveryDate": "2023-11-01"
//       },
  
//       {
//         "name": "Alice Miller",
//         "trackingNumber": "RST091",
//         "deliveryStatus": "Delivered",
//         "deliveryDate": "2023-10-29"
//       },
//       {
//         "name": "David Green",
//         "trackingNumber": "UVW234",
//         "deliveryStatus": "Out for delivery",
//         "deliveryDate": "2023-10-30"
//       },
//       {
//         "name": "Sarah Jones",
//         "trackingNumber": "ABC890",
//         "deliveryStatus": "Picked up",
//         "deliveryDate": "2023-10-28"
//       },
//       {
//         "name": "Michael Williams",
//         "trackingNumber": "DEF012",
//         "deliveryStatus": "Delivered",
//         "deliveryDate": "2023-10-29"
//       },
//       {
//         "name": "Elizabeth Brown",
//         "trackingNumber": "GHI345",
//         "deliveryStatus": "Out for delivery",
//         "deliveryDate": "2023-10-30"
//       },
//       {
//         "name": "William Johnson",
//         "trackingNumber": "JKL678",
//         "deliveryStatus": "Pending",
//         "deliveryDate": "2023-11-01"
//       },
//       {
//         "name": "Mary Johnson",
//         "trackingNumber": "MNO901",
//         "deliveryStatus": "Picked up",
//         "deliveryDate": "2023-10-28"
//       },
//       {
//         "name": "James Miller",
//         "trackingNumber": "PQR012",
//         "deliveryStatus": "In transit",
//         "deliveryDate": "2023-10-31"
//       },
//       {
//         "name": "Charles Green",
//         "trackingNumber": "UVW345",
//         "deliveryStatus": "Delivered",
//         "deliveryDate": "2023-10-29"
//       },
//       {
//         "name": "Robert Brown",
//         "trackingNumber": "XYZ678",
//         "deliveryStatus": "Out for delivery",
//         "deliveryDate": "2023-10-30"
//       },
//       {
//         "name": "Mary Jane Watson",
//         "trackingNumber": "2222222222",
//         "deliveryStatus": "Picked up",
//         "deliveryDate": "2023-10-28"
//       }
//   ]
//   const [searchTerm, setSearchTerm] = useState("");
//   const [deliveryInfo, setDeliveryInfo] = useState(Data);

//   const handleSearch = () => {
//     // Filter the deliveryInfo array based on the search term
//     const filteredDeliveryInfo = deliveryInfo.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setDeliveryInfo(filteredDeliveryInfo);
//   };
 
//   // const handleSearch = () => {
//   //   // Create a new array to store the filtered results
//   //   const filteredDeliveryInfo = [];
  
//   //   // Filter the deliveryInfo array based on the search term
//   //   deliveryInfo.forEach((item) => {
//   //     if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//   //       filteredDeliveryInfo.push(item);
//   //     }
//   //   });
  
//   //   // Set the deliveryInfo state variable to the filtered results
//   //   setDeliveryInfo(filteredDeliveryInfo, () => {
//   //     // Re-render the table
//   //     table.forceUpdate();
//   //   });
//   // };
  
  
//   const handleClear = () => {
//     setSearchTerm("");
//     setDeliveryInfo(Data);
//   };

//   return (
//     <div>
//       <div className="top-section">
//         <div className="name-grid">
//           <h1>Delivery Information</h1>
//         </div>
//         <div className="search-bar-grid">
//           <input
//             type="text"
//             placeholder="Search by name or tracking number"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button type="button" onClick={handleSearch}>
//             Search
//           </button>
//           <button type="button" onClick={handleClear}>
//             Clear
//           </button>
//         </div>
//       </div>

//       <div className="table-section">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Delivery Status</th>
//               <th>Tracking Number</th>
//               <th>Delivery Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {deliveryInfo.map((item) => (
//               <tr key={item.trackingNumber}>
//                 <td>{item.name}</td>
//                 <td>{item.deliveryStatus}</td>
//                 <td>{item.trackingNumber}</td>
//                 <td>{item.deliveryDate}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DeliveryTracker;
