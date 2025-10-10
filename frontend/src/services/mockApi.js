import { mockUsers, mockBikes, mockUsedBikes, mockShowrooms, mockUpcoming, mockReviews, mockStorage } from '../data/mockData';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class MockAPI {
  constructor() {
    this.currentUser = null;
    this.favorites = new Set();
    this.bookings = [];
    this.priceAlerts = [];
    this.cart = [];
  }

  // ================= AUTH ==================
  async login(email, password) {
    await delay(500);
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      const token = `mock-token-${user.id}-${Date.now()}`;
      const userData = { ...user };
      delete userData.password;
      mockStorage.setItem('token', token);
      mockStorage.setItem('user', JSON.stringify(userData));
      this.currentUser = userData;
      return { success: true, token, user: userData };
    }
    return { success: false, error: 'Invalid credentials' };
  }

  async register(username, email, password) {
    await delay(500);
    const existingUser = mockUsers.find(u => u.email === email || u.username === username);
    if (existingUser) return { success: false, error: 'User with this email or username already exists' };
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
    return { success: true, token, user: userData };
  }

  async verifyToken() {
    await delay(200);
    const token = mockStorage.getItem('token');
    const userStr = mockStorage.getItem('user');
    if (token && userStr) {
      const user = JSON.parse(userStr);
      this.currentUser = user;
      return { valid: true, user };
    }
    return { valid: false, error: 'Invalid token' };
  }

  async logout() {
    await delay(200);
    mockStorage.removeItem('token');
    mockStorage.removeItem('user');
    this.currentUser = null;
    this.favorites.clear();
    this.cart = [];
  }

  // ================= BIKE ==================
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

    if (filters.brand) filteredBikes = filteredBikes.filter(bike => bike.brand === filters.brand);
    if (filters.price) filteredBikes = filteredBikes.filter(bike => bike.price <= parseInt(filters.price));
    if (filters.fuelType) filteredBikes = filteredBikes.filter(bike => bike.fuelType === filters.fuelType);
    if (filters.mileage) filteredBikes = filteredBikes.filter(bike => bike.mileage >= parseInt(filters.mileage));
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

  // ================= FAVORITES ==================
  async addToFavorites(bikeId) {
    await delay(300);
    if (!this.currentUser) throw new Error('Please login to add favorites');
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

  // ================= REVIEWS ==================
  async addReview(bikeId, rating, comment) {
    await delay(400);
    if (!this.currentUser) throw new Error('Please login to add reviews');
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

  // ================= CART ==================
  async addToCart(bikeId, quantity = 1) {
    await delay(300);
    if (!this.currentUser) throw new Error('Please login to add to cart');

    const bike = mockBikes.find(b => b.id === parseInt(bikeId));
    if (!bike) throw new Error('Bike not found');

    const existing = this.cart.find(item => item.bike.id === bike.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ bike, quantity });
    }

    return { message: 'Added to cart', cart: this.cart };
  }

  async removeFromCart(bikeId) {
    await delay(200);
    this.cart = this.cart.filter(item => item.bike.id !== parseInt(bikeId));
    return { message: 'Removed from cart', cart: this.cart };
  }

  async updateCartQuantity(bikeId, quantity) {
    await delay(200);
    const item = this.cart.find(i => i.bike.id === parseInt(bikeId));
    if (!item) throw new Error('Item not in cart');

    if (quantity <= 0) {
      this.cart = this.cart.filter(i => i.bike.id !== parseInt(bikeId));
    } else {
      item.quantity = quantity;
    }

    return { message: 'Cart updated', cart: this.cart };
  }

  async getCart() {
    await delay(200);
    return this.cart;
  }

  async clearCart() {
    await delay(200);
    this.cart = [];
    return { message: 'Cart cleared' };
  }

  async checkout() {
    await delay(500);
    if (!this.currentUser) throw new Error('Please login to checkout');
    if (this.cart.length === 0) throw new Error('Cart is empty');

    const totalAmount = this.cart.reduce((acc, item) => acc + item.bike.price * item.quantity, 0);
    const order = {
      order_id: `ORD-${Date.now()}`,
      user_id: this.currentUser.id,
      items: [...this.cart],
      total: totalAmount,
      created_at: new Date().toISOString(),
      status: 'confirmed'
    };

    this.cart = [];
    return { message: 'Checkout successful', order };
  }

  // ================= OTHER ==================
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

  // ================= ADMIN ==================
  async addBike(bikeData) {
    await delay(500);
    if (!this.currentUser || this.currentUser.role !== 'admin') throw new Error('Admin access required');

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
    if (!this.currentUser || this.currentUser.role !== 'admin') throw new Error('Admin access required');

    const bikeIndex = mockBikes.findIndex(bike => bike.id === parseInt(bikeId));
    if (bikeIndex === -1) throw new Error('Bike not found');

    const updatedBike = {
      ...mockBikes[bikeIndex],
      ...bikeData,
      price: parseInt(bikeData.price),
      mileage: parseInt(bikeData.mileage),
      updated_at: new Date().toISOString()
    };

    mockBikes[bikeIndex] = updatedBike;
    return updatedBike;
  }

  async deleteBike(bikeId) {
    await delay(500);
    if (!this.currentUser || this.currentUser.role !== 'admin') throw new Error('Admin access required');

    const bikeIndex = mockBikes.findIndex(bike => bike.id === parseInt(bikeId));
    if (bikeIndex === -1) throw new Error('Bike not found');

    mockBikes.splice(bikeIndex, 1);
    return { message: 'Bike deleted successfully' };
  }

  async getAdminStats() {
    await delay(300);
    if (!this.currentUser || this.currentUser.role !== 'admin') throw new Error('Admin access required');

    return {
      totalBikes: mockBikes.length,
      totalUsers: mockUsers.length,
      totalReviews: mockReviews.length,
      totalBookings: this.bookings.length
    };
  }
}

const mockAPI = new MockAPI();
export default mockAPI;
