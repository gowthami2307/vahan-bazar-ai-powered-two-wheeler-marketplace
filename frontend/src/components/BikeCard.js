import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Eye, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import mockAPI from '../services/mockApi';
import toast from 'react-hot-toast';

function BikeCard({ bike }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const handleAddToFavorites = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add favorites');
      return;
    }

    setIsLoading(true);
    try {
      await mockAPI.addToFavorites(bike.id);
      setIsFavorite(true);
      toast.success('Added to favorites!');
    } catch (error) {
      toast.error(error.message || 'Failed to add to favorites');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFromFavorites = async () => {
    setIsLoading(true);
    try {
      await mockAPI.removeFromFavorites(bike.id);
      setIsFavorite(false);
      toast.success('Removed from favorites!');
    } catch (error) {
      toast.error('Failed to remove from favorites');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Bike Image */}
      <div className="relative h-48 bg-gray-200">
        {bike.image ? (
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-4xl">🏍️</span>
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
          disabled={isLoading}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isFavorite 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-600 hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Bike Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {bike.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {bike.brand}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Price:</span>
            <span className="font-semibold text-green-600">
              ₹{bike.price?.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Fuel Type:</span>
            <span className="text-gray-900">{bike.fuelType}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Mileage:</span>
            <span className="text-gray-900">{bike.mileage} km/l</span>
          </div>
        </div>

        {/* Rating (placeholder) */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">(4.5)</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            to={`/bikes/${bike.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            <Eye className="h-4 w-4 mr-1" />
            View Details
          </Link>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BikeCard;
