import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Signup from './components/Signup';
import BikeList from './components/BikeList';
import Filters from './components/Filters';
import Compare from './components/Compare';
import BikeCard from './components/BikeCard';
import EMICalculator from './components/EMICalculator';
import FuelCostCalculator from './components/FuelCostCalculator';
import BookingForm from './components/BookingForm';
import DemoBanner from './components/DemoBanner';
import mockAPI from './services/mockApi';
import './App.css';

// Auth Pages Component
const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {isLogin ? (
        <Login onToggleMode={() => setIsLogin(false)} />
      ) : (
        <Signup onToggleMode={() => setIsLogin(true)} />
      )}
    </>
  );
};

// Main App Content
const AppContent = () => {
  const { loading } = useAuth();
  const [filters, setFilters] = useState({});

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DemoBanner />
      <Navbar />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<AuthPages />} />
          <Route path="/signup" element={<AuthPages />} />
          
          {/* Home Page */}
          <Route path="/" element={
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Welcome to Vahan Bazar
                </h1>
                <p className="text-xl text-gray-600">
                  Your one-stop destination for two-wheelers
                </p>
              </div>
              <Filters onFiltersChange={setFilters} />
              <BikeList filters={filters} />
            </div>
          } />
          
          {/* Bikes Page */}
          <Route path="/bikes" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">All Bikes</h1>
              <Filters onFiltersChange={setFilters} />
              <BikeList filters={filters} />
            </div>
          } />
          
          <Route path="/bikes/:id" element={<BikeDetails />} />
          
          {/* Used Bikes Page */}
          <Route path="/used-bikes" element={
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Used Bikes Marketplace</h1>
                <p className="text-lg text-gray-600">Find great deals on pre-owned two-wheelers</p>
              </div>
              <UsedBikesList />
            </div>
          } />
          
          {/* Showrooms Page */}
          <Route path="/showrooms" element={
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Authorized Showrooms</h1>
                <p className="text-lg text-gray-600">Visit our showrooms for test rides and expert advice</p>
              </div>
              <ShowroomsList />
            </div>
          } />
          
          {/* Upcoming Page */}
          <Route path="/upcoming" element={
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Launches</h1>
                <p className="text-lg text-gray-600">Get ready for the next generation of two-wheelers</p>
              </div>
              <UpcomingList />
            </div>
          } />
          
          {/* Compare Page */}
          <Route path="/compare" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Compare Bikes</h1>
              <Compare />
            </div>
          } />
          
          {/* EMI Calculator */}
          <Route path="/emi-calculator" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">EMI Calculator</h1>
              <EMICalculator />
            </div>
          } />
          
          {/* Fuel Cost Calculator */}
          <Route path="/fuel-calculator" element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Fuel Cost Calculator</h1>
              <FuelCostCalculator />
            </div>
          } />
          
          {/* Protected Routes */}
          <Route path="/favorites" element={
            <ProtectedRoute>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">My Favorites</h1>
                <FavoritesList />
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile Settings</h1>
                <ProfileSettings />
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin>
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
                <AdminDashboard />
              </div>
            </ProtectedRoute>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">Page not found</p>
                <a href="/" className="text-blue-600 hover:text-blue-800">Go back home</a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Toaster position="top-right" />
    </div>
  );
};

// Implemented components
const UsedBikesList = () => {
  const [usedBikes, setUsedBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsedBikes = async () => {
      try {
        console.log('Fetching used bikes...');
        const bikes = await mockAPI.getUsedBikes();
        console.log('Used bikes fetched:', bikes);
        setUsedBikes(bikes);
        setError(null);
      } catch (error) {
        console.error('Error fetching used bikes:', error);
        setError('Failed to load used bikes');
      } finally {
        setLoading(false);
      }
    };
    fetchUsedBikes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading used bikes...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">❌ {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (usedBikes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-4">🏍️ No used bikes available at the moment</div>
        <p className="text-gray-500">Check back later for new listings!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {usedBikes.map(bike => (
        <div key={bike.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200 relative">
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
              <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                🏍️
              </div>
            )}
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              USED
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{bike.name}</h3>
            <p className="text-green-600 font-bold text-xl mb-3">₹{bike.price.toLocaleString()}</p>
            <div className="text-sm text-gray-600 space-y-1 mb-3">
              <div className="flex justify-between">
                <span>Brand:</span>
                <span className="font-medium">{bike.brand}</span>
              </div>
              <div className="flex justify-between">
                <span>Fuel:</span>
                <span className="font-medium">{bike.fuelType}</span>
              </div>
              <div className="flex justify-between">
                <span>Mileage:</span>
                <span className="font-medium">{bike.mileage} km/l</span>
              </div>
              <div className="flex justify-between">
                <span>Seller:</span>
                <span className="font-medium">{bike.seller}</span>
              </div>
              <div className="flex justify-between">
                <span>Year:</span>
                <span className="font-medium">{bike.year_of_purchase}</span>
              </div>
              <div className="flex justify-between">
                <span>Condition:</span>
                <span className="text-yellow-500">{'★'.repeat(bike.condition_rating)}</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 line-clamp-2">{bike.description}</p>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                📞 Contact Seller
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                💬 Chat Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ShowroomsList = () => {
  const [showrooms, setShowrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShowrooms = async () => {
      try {
        console.log('Fetching showrooms...');
        const data = await mockAPI.getShowrooms();
        console.log('Showrooms fetched:', data);
        setShowrooms(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching showrooms:', error);
        setError('Failed to load showrooms');
      } finally {
        setLoading(false);
      }
    };
    fetchShowrooms();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading showrooms...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">❌ {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (showrooms.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-4">🏪 No showrooms available at the moment</div>
        <p className="text-gray-500">Check back later for new showroom listings!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showrooms.map(showroom => (
        <div key={showroom.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-2xl">🏪</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{showroom.name}</h3>
          </div>
          
          <div className="space-y-3 text-gray-600 mb-4">
            <div className="flex items-start">
              <span className="text-blue-500 mr-2">📍</span>
              <span className="text-sm">{showroom.address}</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">📞</span>
              <span className="text-sm font-medium">{showroom.contact}</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 mr-2">🏙️</span>
              <span className="text-sm">{showroom.city}, {showroom.state} - {showroom.pincode}</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-3">Available Services:</h4>
            <div className="flex flex-wrap gap-2">
              {showroom.services.map((service, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              🚗 Book Test Ride
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
              📍 Get Directions
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const UpcomingList = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        console.log('Fetching upcoming launches...');
        const data = await mockAPI.getUpcoming();
        console.log('Upcoming launches fetched:', data);
        setUpcoming(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching upcoming launches:', error);
        setError('Failed to load upcoming launches');
      } finally {
        setLoading(false);
      }
    };
    fetchUpcoming();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading upcoming launches...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">❌ {error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (upcoming.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-4">🚀 No upcoming launches at the moment</div>
        <p className="text-gray-500">Check back later for exciting new launches!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {upcoming.map(launch => (
        <div key={launch.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200 relative">
            {launch.image ? (
              <img
                src={launch.image}
                alt={launch.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Coming+Soon';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                🚀
              </div>
            )}
            <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">
              UPCOMING
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                <span className="text-green-600 text-sm">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{launch.name}</h3>
            </div>
            
            <p className="text-blue-600 font-bold text-lg mb-3">
              Expected Price: ₹{launch.expected_price?.toLocaleString()}
            </p>
            
            <div className="text-sm text-gray-600 space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Brand:</span>
                <span className="font-medium">{launch.brand}</span>
              </div>
              <div className="flex justify-between">
                <span>Launch Date:</span>
                <span className="font-medium text-green-600">
                  {new Date(launch.launch_date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Days to Launch:</span>
                <span className="font-medium text-orange-600">
                  {Math.ceil((new Date(launch.launch_date) - new Date()) / (1000 * 60 * 60 * 24))} days
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-4 line-clamp-3">{launch.description}</p>
            
            <div className="space-y-2">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                🔔 Get Notified
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                📋 Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      const fetchFavorites = async () => {
        try {
          const data = await mockAPI.getFavorites();
          setFavorites(data);
        } catch (error) {
          console.error('Error fetching favorites:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchFavorites();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Please login to view your favorites.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading favorites...</span>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No favorites yet. Start adding bikes to your favorites!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {favorites.map(bike => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
};

function addToCart() {
  
}

const ProfileSettings = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(formData);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Bike Details Component
const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        setLoading(true);
        const bikes = await mockAPI.getBikes();
        const foundBike = bikes.find(b => b.id === parseInt(id));
        
        if (!foundBike) {
          setError('Bike not found');
          return;
        }
        
        setBike(foundBike);
        setError(null);
      } catch (error) {
        console.error('Error fetching bike details:', error);
        setError('Failed to load bike details');
      } finally {
        setLoading(false);
      }
    };

    fetchBikeDetails();
  }, [id]);

  const handleAddToFavorites = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add favorites');
      return;
    }

    try {
      await mockAPI.addToFavorites(bike.id);
      setIsFavorite(true);
      toast.success('Added to favorites!');
    } catch (error) {
      toast.error(error.message || 'Failed to add to favorites');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading bike details...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">❌ {error}</div>
        <Link 
          to="/bikes" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Bikes
        </Link>
      </div>
    );
  }

  if (!bike) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600 mb-4">🚫 Bike not found</div>
        <Link 
          to="/bikes" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Bikes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              🏠 Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="text-gray-400 mx-2">/</span>
              <Link to="/bikes" className="text-gray-700 hover:text-blue-600">
                Bikes
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-500">{bike.name}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bike Images */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=No+Image';
              }}
            />
          </div>
          
          {/* Additional Images Placeholder */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={bike.image}
                  alt={`${bike.name} view ${index}`}
                  className="w-full h-20 object-cover cursor-pointer hover:opacity-75"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x100?text=View+' + index;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bike Information */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{bike.name}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                bike.fuelType === 'Electric' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {bike.fuelType}
              </span>
            </div>
            <p className="text-lg text-gray-600">{bike.brand}</p>
            <div className="text-3xl font-bold text-green-600 mt-2">
              ₹{bike.price?.toLocaleString()}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Mileage</div>
              <div className="text-xl font-semibold">{bike.mileage} km/l</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600">Fuel Type</div>
              <div className="text-xl font-semibold">{bike.fuelType}</div>
            </div>
          </div>

          {/* Description */}
          {bike.description && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{bike.description}</p>
            </div>
          )}

          {/* Specifications */}
          {bike.specifications && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(bike.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 capitalize">
                      {key.replace('_', ' ')}:
                    </span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <button
                onClick={handleAddToFavorites}
                className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                ❤️ Add to Favorites
              </button>
              <button
                onClick={() => setShowBookingForm(true)}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                🏍️ Book Test Ride
              </button>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                💬 Get Quote
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                📞 Contact Dealer
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📋 What's Included</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✅ Manufacturer Warranty</li>
              <li>✅ Free First Service</li>
              <li>✅ Roadside Assistance</li>
              <li>✅ Insurance Assistance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Book Test Ride</h3>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <BookingForm 
              bikeId={bike.id}
              bikeName={bike.name}
              onClose={() => setShowBookingForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddBike, setShowAddBike] = useState(false);
  const [editingBike, setEditingBike] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, bikesData] = await Promise.all([
          mockAPI.getAdminStats(),
          mockAPI.getBikes()
        ]);
        setStats(statsData);
        setBikes(bikesData);
      } catch (error) {
        console.error('Error fetching admin data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddBike = async (bikeData) => {
    try {
      const newBike = await mockAPI.addBike(bikeData);
      setBikes([...bikes, newBike]);
      setShowAddBike(false);
      toast.success('Bike added successfully!');
    } catch (error) {
      toast.error('Failed to add bike');
    }
  };

  const handleUpdateBike = async (bikeId, bikeData) => {
    try {
      const updatedBike = await mockAPI.updateBike(bikeId, bikeData);
      setBikes(bikes.map(bike => bike.id === bikeId ? updatedBike : bike));
      setEditingBike(null);
      toast.success('Bike updated successfully!');
    } catch (error) {
      toast.error('Failed to update bike');
    }
  };

  const handleDeleteBike = async (bikeId) => {
    if (window.confirm('Are you sure you want to delete this bike?')) {
      try {
        await mockAPI.deleteBike(bikeId);
        setBikes(bikes.filter(bike => bike.id !== bikeId));
        toast.success('Bike deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete bike');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading admin dashboard...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setActiveTab('bikes')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'bikes'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              🏍️ Manage Bikes
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              👥 Users
            </button>
          </nav>
        </div>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-blue-600">{stats?.totalBikes || 0}</div>
              <div className="text-gray-600">Total Bikes</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-green-600">{stats?.totalUsers || 0}</div>
              <div className="text-gray-600">Total Users</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-yellow-600">{stats?.totalReviews || 0}</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl font-bold text-purple-600">{stats?.totalBookings || 0}</div>
              <div className="text-gray-600">Test Ride Bookings</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => setShowAddBike(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                ➕ Add New Bike
              </button>
              <button 
                onClick={() => setActiveTab('users')}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                👥 Manage Users
              </button>
              <button 
                onClick={() => setActiveTab('bikes')}
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700"
              >
                🏍️ Manage Bikes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bikes Management Tab */}
      {activeTab === 'bikes' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Bike Management</h2>
            <button
              onClick={() => setShowAddBike(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              ➕ Add New Bike
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fuel Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bikes.map((bike) => (
                    <tr key={bike.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img 
                          src={bike.image} 
                          alt={bike.name}
                          className="h-12 w-12 rounded-lg object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{bike.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{bike.brand}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">₹{bike.price?.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          bike.fuelType === 'Electric' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {bike.fuelType}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button
                          onClick={() => setEditingBike(bike)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          onClick={() => handleDeleteBike(bike.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          🗑️ Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600">User management features coming soon...</p>
          </div>
        </div>
      )}

      {/* Add/Edit Bike Modal */}
      {(showAddBike || editingBike) && (
        <BikeFormModal
          bike={editingBike}
          onSave={editingBike ? (data) => handleUpdateBike(editingBike.id, data) : handleAddBike}
          onClose={() => {
            setShowAddBike(false);
            setEditingBike(null);
          }}
        />
      )}
    </div>
  );
};

// Bike Form Modal Component
const BikeFormModal = ({ bike, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: bike?.name || '',
    price: bike?.price || '',
    brand: bike?.brand || '',
    fuelType: bike?.fuelType || 'Petrol',
    mileage: bike?.mileage || '',
    description: bike?.description || '',
    image: bike?.image || '',
    specifications: bike?.specifications || {
      engine: '',
      power: '',
      torque: '',
      transmission: '',
      brakes: '',
      wheels: ''
    }
  });

  const [imagePreview, setImagePreview] = useState(bike?.image || '');
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSpecChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      specifications: {
        ...prev.specifications,
        [name]: value
      }
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    
    // For demo purposes, we'll simulate image upload
    // In a real app, you would upload to a cloud service like AWS S3, Cloudinary, etc.
    setTimeout(() => {
      // Simulate getting a URL from image upload service
      const mockImageUrl = `https://images.unsplash.com/photo-${Date.now()}?w=500&h=400&fit=crop`;
      setFormData(prev => ({ ...prev, image: mockImageUrl }));
      setImagePreview(mockImageUrl);
      setIsUploading(false);
      toast.success('Image uploaded successfully!');
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.brand) {
      toast.error('Please fill in all required fields');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {bike ? 'Edit Bike' : 'Add New Bike'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bike Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand *
                </label>
                <select
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Brand</option>
                  <option value="Honda">Honda</option>
                  <option value="Bajaj">Bajaj</option>
                  <option value="TVS">TVS</option>
                  <option value="Hero">Hero</option>
                  <option value="Yamaha">Yamaha</option>
                  <option value="Royal Enfield">Royal Enfield</option>
                  <option value="KTM">KTM</option>
                  <option value="Ather">Ather</option>
                  <option value="Suzuki">Suzuki</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fuel Type
                </label>
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Electric">Electric</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mileage (km/l)
                </label>
                <input
                  type="number"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bike Image
              </label>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                  >
                    {isUploading ? '⏳ Uploading...' : '📷 Upload Image'}
                  </label>
                  <input
                    type="url"
                    placeholder="Or paste image URL"
                    value={formData.image}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, image: e.target.value }));
                      setImagePreview(e.target.value);
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-32 w-32 object-cover rounded-lg border"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/128x128?text=Invalid+Image';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Engine
                  </label>
                  <input
                    type="text"
                    name="engine"
                    value={formData.specifications.engine}
                    onChange={handleSpecChange}
                    placeholder="e.g., 109cc"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Power
                  </label>
                  <input
                    type="text"
                    name="power"
                    value={formData.specifications.power}
                    onChange={handleSpecChange}
                    placeholder="e.g., 8.31 PS"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Torque
                  </label>
                  <input
                    type="text"
                    name="torque"
                    value={formData.specifications.torque}
                    onChange={handleSpecChange}
                    placeholder="e.g., 8.79 Nm"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transmission
                  </label>
                  <input
                    type="text"
                    name="transmission"
                    value={formData.specifications.transmission}
                    onChange={handleSpecChange}
                    placeholder="e.g., CVT, 5-speed"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brakes
                  </label>
                  <input
                    type="text"
                    name="brakes"
                    value={formData.specifications.brakes}
                    onChange={handleSpecChange}
                    placeholder="e.g., Disc, Drum"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wheels
                  </label>
                  <input
                    type="text"
                    name="wheels"
                    value={formData.specifications.wheels}
                    onChange={handleSpecChange}
                    placeholder="e.g., 12 inch, 17 inch"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {bike ? 'Update Bike' : 'Add Bike'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
