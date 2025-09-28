import React, { useEffect, useState } from 'react';
import mockAPI from '../services/mockApi';
import BikeCard from './BikeCard';
import { Loader2 } from 'lucide-react';

function BikeList({ filters = {} }) {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setLoading(true);
        let response;
        
        // If filters are provided, use search, otherwise get all bikes
        if (Object.keys(filters).length > 0 && Object.values(filters).some(v => v !== '')) {
          response = await mockAPI.searchBikes(filters);
        } else {
          response = await mockAPI.getBikes();
        }
        
        setBikes(response);
      } catch (err) {
        setError('Failed to fetch bikes');
        console.error('Error fetching bikes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, [filters]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Loading bikes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (bikes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No bikes found</p>
        {Object.keys(filters).length > 0 && (
          <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {bikes.map(bike => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
}

export default BikeList;
