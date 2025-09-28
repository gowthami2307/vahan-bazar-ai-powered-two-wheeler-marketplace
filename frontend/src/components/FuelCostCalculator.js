import React, { useState } from 'react';
import { Fuel } from 'lucide-react';

function FuelCostCalculator() {
  const [distance, setDistance] = useState('');
  const [mileage, setMileage] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [cost, setCost] = useState(null);
  const [fuelRequired, setFuelRequired] = useState(null);

  const calculateCost = () => {
    const d = parseFloat(distance);
    const m = parseFloat(mileage);
    const f = parseFloat(fuelPrice);
    
    if (d && m && f) {
      const fuelNeeded = d / m;
      const totalCost = fuelNeeded * f;
      
      setFuelRequired(fuelNeeded.toFixed(2));
      setCost(totalCost.toFixed(2));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Fuel className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-900">Fuel Cost Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Distance (km)
          </label>
          <input
            type="number"
            placeholder="e.g. 100"
            value={distance}
            onChange={e => setDistance(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Vehicle Mileage (km/l)
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="e.g. 45"
            value={mileage}
            onChange={e => setMileage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fuel Price (₹/liter)
          </label>
          <input
            type="number"
            step="0.1"
            placeholder="e.g. 100"
            value={fuelPrice}
            onChange={e => setFuelPrice(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={calculateCost}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Calculate Fuel Cost
      </button>

      {cost && (
        <div className="mt-8 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Fuel Cost Calculation Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">₹{cost}</div>
                <div className="text-sm text-blue-700">Total Fuel Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{fuelRequired} L</div>
                <div className="text-sm text-blue-700">Fuel Required</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Calculation Details:</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Distance: {distance} km</div>
              <div>Mileage: {mileage} km/l</div>
              <div>Fuel Price: ₹{fuelPrice}/liter</div>
              <div>Fuel Required: {fuelRequired} liters</div>
              <div>Total Cost: ₹{cost}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FuelCostCalculator;
