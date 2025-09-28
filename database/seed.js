// Dummy seed script for MongoDB
const mongoose = require('mongoose');
const { Bike, User, Dealer } = require('./models');

mongoose.connect('mongodb://localhost:27017/vahanbazar');

async function seed() {
  await Bike.deleteMany({});
  await User.deleteMany({});
  await Dealer.deleteMany({});
  await Bike.create([
    { name: 'Honda Activa', price: 75000, brand: 'Honda', fuelType: 'Petrol', mileage: 45, image: 'activa.jpg' },
    { name: 'Ather 450X', price: 150000, brand: 'Ather', fuelType: 'Electric', mileage: 100, image: 'ather.jpg' },
    { name: 'Bajaj Pulsar', price: 120000, brand: 'Bajaj', fuelType: 'Petrol', mileage: 50, image: 'pulsar.jpg' }
  ]);
  // Add more dummy data as needed
  console.log('Seeded successfully');
  mongoose.disconnect();
}

seed();
