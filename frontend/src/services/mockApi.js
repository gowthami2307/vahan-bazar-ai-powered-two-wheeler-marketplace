import { mockUsers, mockBikes, mockUsedBikes, mockShowrooms, mockUpcoming, mockReviews, mockStorage } from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API class
class MockAPI {
  constructor() {
    this.currentUser = null;
    this.favorites = new Set();
    this.bookings = [];
    this.priceAlerts = [];
  }

  // Authentication methods
  async login(email, password) {
    await delay(500); // Simulate network delay
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      const token = `mock-token-${user.id}-${Date.now()}`;
      const userData = { ...user };
      delete userData.password; // Remove password from response
      
      mockStorage.setItem('token', token);
      mockStorage.setItem('user', JSON.stringify(userData));
      this.currentUser = userData;
      
      return {
        success: true,
        token,
        user: userData
      };
    }
    
    return {
      success: false,
      error: 'Invalid credentials'
    };
  }

  async register(username, email, password) {
    await delay(500);
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return {
        success: false,
        error: 'User with this email or username already exists'
      };
    }
    
    // Create new user
    const newUser = {
      id: mockUsers.length + 1,
      username,
      email,
      password,
      role: 'user',
      created_at: new Date().toISOString()
    };
    
    mockUsers.push(newUser);
    
    const token = `mock-token-${newUser.id}-${Date.now()}`;
    const userData = { ...newUser };
    delete userData.password;
    
    mockStorage.setItem('token', token);
    mockStorage.setItem('user', JSON.stringify(userData));
    this.currentUser = userData;
    
    return {
      success: true,
      token,
      user: userData
    };
  }

  async verifyToken() {
    await delay(200);
    
    const token = mockStorage.getItem('token');
    const userStr = mockStorage.getItem('user');
    
    if (token && userStr) {
      const user = JSON.parse(userStr);
      this.currentUser = user;
      return {
        valid: true,
        user
      };
    }
    
    return {
      valid: false,
      error: 'Invalid token'
    };
  }

  async logout() {
    await delay(200);
    mockStorage.removeItem('token');
    mockStorage.removeItem('user');
    this.currentUser = null;
    this.favorites.clear();
  }

  // Bike methods
  async getBikes() {
    await delay(300);
    return mockBikes;
  }

  async searchBikes(filters = {}) {
    await delay(400);
    
    let filteredBikes = [...mockBikes];
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredBikes = filteredBikes.filter(bike => 
        bike.name.toLowerCase().includes(searchTerm) ||
        bike.brand.toLowerCase().includes(searchTerm) ||
        bike.description.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.brand) {
      filteredBikes = filteredBikes.filter(bike => bike.brand === filters.brand);
    }
    
    if (filters.price) {
      filteredBikes = filteredBikes.filter(bike => bike.price <= parseInt(filters.price));
    }
    
    if (filters.fuelType) {
      filteredBikes = filteredBikes.filter(bike => bike.fuelType === filters.fuelType);
    }
    
    if (filters.mileage) {
      filteredBikes = filteredBikes.filter(bike => bike.mileage >= parseInt(filters.mileage));
    }
    
    return filteredBikes;
  }

  async getBikeById(id) {
    await delay(200);
    return mockBikes.find(bike => bike.id === parseInt(id));
  }

  async compareBikes(ids) {
    await delay(300);
    return mockBikes.filter(bike => ids.includes(bike.id));
  }

  async getBrands() {
    await delay(200);
    return [...new Set(mockBikes.map(bike => bike.brand))].sort();
  }

  async getFuelTypes() {
    await delay(200);
    return [...new Set(mockBikes.map(bike => bike.fuelType))].sort();
  }

  // User favorites
  async addToFavorites(bikeId) {
    await delay(300);
    
    if (!this.currentUser) {
      throw new Error('Please login to add favorites');
    }
    
    this.favorites.add(parseInt(bikeId));
    return { message: 'Added to favorites' };
  }

  async removeFromFavorites(bikeId) {
    await delay(300);
    this.favorites.delete(parseInt(bikeId));
    return { message: 'Removed from favorites' };
  }

  async getFavorites() {
    await delay(300);
    return mockBikes.filter(bike => this.favorites.has(bike.id));
  }

  // Reviews
  async addReview(bikeId, rating, comment) {
    await delay(400);
    
    if (!this.currentUser) {
      throw new Error('Please login to add reviews');
    }
    
    const review = {
      id: mockReviews.length + 1,
      user_id: this.currentUser.id,
      bike_id: parseInt(bikeId),
      rating,
      comment,
      username: this.currentUser.username,
      created_at: new Date().toISOString()
    };
    
    mockReviews.push(review);
    return { message: 'Review added successfully' };
  }

  async getBikeReviews(bikeId) {
    await delay(200);
    return mockReviews.filter(review => review.bike_id === parseInt(bikeId));
  }

  // Test ride booking
  async bookTestRide(showroomId, bikeId, bookingDate, bookingTime, contactNumber) {
    await delay(500);
    
    if (!this.currentUser) {
      throw new Error('Please login to book test ride');
    }
    
    const booking = {
      id: this.bookings.length + 1,
      user_id: this.currentUser.id,
      showroom_id: parseInt(showroomId),
      bike_id: parseInt(bikeId),
      booking_date: bookingDate,
      booking_time: bookingTime,
      contact_number: contactNumber,
      status: 'pending',
      created_at: new Date().toISOString()
    };
    
    this.bookings.push(booking);
    return { 
      message: 'Test ride booked successfully', 
      booking_id: booking.id 
    };
  }

  // Other data methods
  async getUsedBikes() {
    await delay(300);
    return mockUsedBikes;
  }

  async getShowrooms() {
    await delay(300);
    return mockShowrooms;
  }

  async getUpcoming() {
    await delay(300);
    return mockUpcoming;
  }

  // Admin methods
  async addBike(bikeData) {
    await delay(500);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    const newBike = {
      id: mockBikes.length + 1,
      ...bikeData,
      created_by: this.currentUser.id,
      created_at: new Date().toISOString()
    };
    
    mockBikes.push(newBike);
    return { 
      message: 'Bike added successfully', 
      bike_id: newBike.id 
    };
  }

  async updateBike(id, bikeData) {
    await delay(500);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    const bikeIndex = mockBikes.findIndex(bike => bike.id === parseInt(id));
    if (bikeIndex === -1) {
      throw new Error('Bike not found');
    }
    
    mockBikes[bikeIndex] = { ...mockBikes[bikeIndex], ...bikeData };
    return { message: 'Bike updated successfully' };
  }

  async deleteBike(id) {
    await delay(500);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    const bikeIndex = mockBikes.findIndex(bike => bike.id === parseInt(id));
    if (bikeIndex === -1) {
      throw new Error('Bike not found');
    }
    
    mockBikes.splice(bikeIndex, 1);
    return { message: 'Bike deleted successfully' };
  }

  async getAdminStats() {
    await delay(300);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    return {
      totalBikes: mockBikes.length,
      totalUsers: mockUsers.length,
      totalReviews: mockReviews.length,
      totalBookings: this.bookings.length
    };
  }

  // Admin bike management methods
  async addBike(bikeData) {
    await delay(500);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    const newBike = {
      id: Math.max(...mockBikes.map(b => b.id)) + 1,
      name: bikeData.name,
      price: parseInt(bikeData.price),
      brand: bikeData.brand,
      fuelType: bikeData.fuelType,
      mileage: parseInt(bikeData.mileage) || 0,
      image: bikeData.image || 'https://via.placeholder.com/500x400?text=No+Image',
      description: bikeData.description || '',
      specifications: bikeData.specifications || {},
      created_by: this.currentUser.id,
      created_at: new Date().toISOString()
    };
    
    mockBikes.push(newBike);
    return newBike;
  }

  async updateBike(bikeId, bikeData) {
    await delay(500);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    const bikeIndex = mockBikes.findIndex(bike => bike.id === parseInt(bikeId));
    if (bikeIndex === -1) {
      throw new Error('Bike not found');
    }
    
    const updatedBike = {
      ...mockBikes[bikeIndex],
      name: bikeData.name,
      price: parseInt(bikeData.price),
      brand: bikeData.brand,
      fuelType: bikeData.fuelType,
      mileage: parseInt(bikeData.mileage) || 0,
      image: bikeData.image || mockBikes[bikeIndex].image,
      description: bikeData.description || '',
      specifications: bikeData.specifications || mockBikes[bikeIndex].specifications,
      updated_at: new Date().toISOString()
    };
    
    mockBikes[bikeIndex] = updatedBike;
    return updatedBike;
  }

  async deleteBike(bikeId) {
    await delay(500);
    
    if (!this.currentUser || this.currentUser.role !== 'admin') {
      throw new Error('Admin access required');
    }
    
    const bikeIndex = mockBikes.findIndex(bike => bike.id === parseInt(bikeId));
    if (bikeIndex === -1) {
      throw new Error('Bike not found');
    }
    
    mockBikes.splice(bikeIndex, 1);
    return { message: 'Bike deleted successfully' };
  }
}

// Create singleton instance
const mockAPI = new MockAPI();

export default mockAPI;
