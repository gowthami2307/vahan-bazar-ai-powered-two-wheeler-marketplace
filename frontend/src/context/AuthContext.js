import React, { createContext, useContext, useState, useEffect } from 'react';
import mockAPI from '../services/mockApi';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Check if user is authenticated on app load
  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const response = await mockAPI.verifyToken();
          if (response.valid) {
            setUser(response.user);
          } else {
            logout();
          }
        } catch (error) {
          console.error('Auth verification failed:', error);
          logout();
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [token]);

  const login = async (email, password) => {
    try {
      const result = await mockAPI.login(email, password);
      
      if (result.success) {
        localStorage.setItem('token', result.token);
        setToken(result.token);
        setUser(result.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: result.error 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Login failed' 
      };
    }
  };

  const register = async (username, email, password) => {
    try {
      const result = await mockAPI.register(username, email, password);
      
      if (result.success) {
        localStorage.setItem('token', result.token);
        setToken(result.token);
        setUser(result.user);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: result.error 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Registration failed' 
      };
    }
  };

  const logout = async () => {
    await mockAPI.logout();
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const updateProfile = async (profileData) => {
    try {
      // In a real app, this would call the API
      // For demo, we'll just update the local state
      setUser({ ...user, ...profileData });
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: 'Profile update failed' 
      };
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
