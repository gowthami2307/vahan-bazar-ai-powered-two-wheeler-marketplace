import React, { useState, useEffect } from 'react';
import mockAPI from '../services/mockApi';
import { Loader2 } from 'lucide-react';

function Compare() {
  const [ids, setIds] = useState(['', '']);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const allBikes = await mockAPI.getBikes();
      setBikes(allBikes);
    };
    fetchBikes();
  }, []);

  const handleCompare = async () => {
    if (ids[0] && ids[1]) {
      setLoading(true);
      try {
        const compareResult = await mockAPI.compareBikes(ids.map(id => parseInt(id)));
        setResult(compareResult);
      } catch (error) {
        console.error('Error comparing bikes:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare Bikes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select First Bike</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ids[0]}
            onChange={e => setIds([e.target.value, ids[1]])}
          >
            <option value="">Choose a bike...</option>
            {bikes.map(bike => (
              <option key={bike.id} value={bike.id}>{bike.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Second Bike</label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ids[1]}
            onChange={e => setIds([ids[0], e.target.value])}
          >
            <option value="">Choose a bike...</option>
            {bikes.map(bike => (
              <option key={bike.id} value={bike.id}>{bike.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleCompare}
        disabled={!ids[0] || !ids[1] || loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Comparing...
          </div>
        ) : (
          'Compare Bikes'
        )}
      </button>

      {result.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Comparison Results</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
                  {result.map(bike => (
                    <th key={bike.id} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {bike.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price</td>
                  {result.map(bike => (
                    <td key={bike.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{bike.price.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Brand</td>
                  {result.map(bike => (
                    <td key={bike.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bike.brand}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fuel Type</td>
                  {result.map(bike => (
                    <td key={bike.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bike.fuelType}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mileage</td>
                  {result.map(bike => (
                    <td key={bike.id} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {bike.mileage} km/l
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Description</td>
                  {result.map(bike => (
                    <td key={bike.id} className="px-6 py-4 text-sm text-gray-900">
                      {bike.description}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compare;
