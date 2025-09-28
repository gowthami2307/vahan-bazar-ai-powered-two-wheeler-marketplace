const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  fuelType: String,
  mileage: Number,
  image: String
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  favorites: [String]
});

const dealerSchema = new mongoose.Schema({
  name: String,
  inventory: [String]
});

module.exports = {
  Bike: mongoose.model('Bike', bikeSchema),
  User: mongoose.model('User', userSchema),
  Dealer: mongoose.model('Dealer', dealerSchema)
};
