import React from 'react';

const dummyData = [];
for (let i = 0; i < 200; i++) {
  dummyData.push({
    id: i + 1,
    fuelCost: Math.random() * 1000,
    fuelConsumed: Math.random() * 100,
  });
}

const FuelOptimisation = () => {
  const renderTableHeader = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>Fuel Cost</th>
          <th>Fuel Consumed</th>
        </tr>
      </thead>
    );
  };

  const renderTableRows = () => {
    return dummyData.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>${item.fuelCost}</td>
        <td>{item.fuelConsumed}</td>
      </tr>
    ));
  };

  return (
    <table className="table">
      {renderTableHeader()}
      <tbody>
        {renderTableRows()}
      </tbody>
    </table>
  );
};

export default FuelOptimisation;
