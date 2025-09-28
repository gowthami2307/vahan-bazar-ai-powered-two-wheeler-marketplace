import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  LogOut, 
  Heart, 
  Settings, 
  Menu, 
  X, 
  Bike,
  Shield
} from 'lucide-react';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const NavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Bike className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Vahan Bazar</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/bikes">Bikes</NavLink>
            <NavLink to="/used-bikes">Used Bikes</NavLink>
            <NavLink to="/showrooms">Showrooms</NavLink>
            <NavLink to="/upcoming">Upcoming</NavLink>
            <NavLink to="/compare">Compare</NavLink>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <NavLink to="/favorites">
                  <Heart className="h-4 w-4 inline mr-1" />
                  Favorites
                </NavLink>
                
                {isAdmin && (
                  <NavLink to="/admin">
                    <Shield className="h-4 w-4 inline mr-1" />
                    Admin
                  </NavLink>
                )}

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <User className="h-4 w-4" />
                    <span>{user?.username}</span>
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/bikes" onClick={() => setIsMenuOpen(false)}>Bikes</NavLink>
              <NavLink to="/used-bikes" onClick={() => setIsMenuOpen(false)}>Used Bikes</NavLink>
              <NavLink to="/showrooms" onClick={() => setIsMenuOpen(false)}>Showrooms</NavLink>
              <NavLink to="/upcoming" onClick={() => setIsMenuOpen(false)}>Upcoming</NavLink>
              <NavLink to="/compare" onClick={() => setIsMenuOpen(false)}>Compare</NavLink>
              
              {isAuthenticated ? (
                <>
                  <NavLink to="/favorites" onClick={() => setIsMenuOpen(false)}>
                    <Heart className="h-4 w-4 inline mr-1" />
                    Favorites
                  </NavLink>
                  
                  {isAdmin && (
                    <NavLink to="/admin" onClick={() => setIsMenuOpen(false)}>
                      <Shield className="h-4 w-4 inline mr-1" />
                      Admin
                    </NavLink>
                  )}
                  
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="px-3 py-2 text-sm text-gray-500">
                      Signed in as {user?.username}
                    </div>
                    <NavLink to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Settings className="h-4 w-4 inline mr-1" />
                      Profile Settings
                    </NavLink>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="border-t border-gray-200 pt-2 mt-2 space-y-1">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-md"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
