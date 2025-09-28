-- Clear existing data
DELETE FROM price_alerts;
DELETE FROM test_ride_bookings;
DELETE FROM reviews;
DELETE FROM user_favorites;
DELETE FROM upcoming_launches;
DELETE FROM showrooms;
DELETE FROM used_bikes;
DELETE FROM bikes;
DELETE FROM users;

-- Reset auto increment
ALTER TABLE users AUTO_INCREMENT = 1;
ALTER TABLE bikes AUTO_INCREMENT = 1;
ALTER TABLE used_bikes AUTO_INCREMENT = 1;
ALTER TABLE showrooms AUTO_INCREMENT = 1;
ALTER TABLE upcoming_launches AUTO_INCREMENT = 1;
ALTER TABLE user_favorites AUTO_INCREMENT = 1;
ALTER TABLE reviews AUTO_INCREMENT = 1;
ALTER TABLE test_ride_bookings AUTO_INCREMENT = 1;
ALTER TABLE price_alerts AUTO_INCREMENT = 1;

-- Insert admin user (password: admin123)
INSERT INTO users (username, email, password, role) VALUES
('admin', 'admin@vahanbazar.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin'),
('john_doe', 'john@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user'),
('jane_smith', 'jane@example.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user');

-- Insert bikes with detailed information
INSERT INTO bikes (name, price, brand, fuelType, mileage, image, description, specifications, created_by) VALUES
('Honda Activa 6G', 75000, 'Honda', 'Petrol', 45, 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 'The Honda Activa 6G is a popular scooter known for its reliability and fuel efficiency.', '{"engine": "109cc", "power": "8.31 PS", "torque": "8.79 Nm", "transmission": "CVT", "brakes": "Drum", "wheels": "12 inch"}', 1),
('Ather 450X', 150000, 'Ather', 'Electric', 100, 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 'The Ather 450X is a premium electric scooter with advanced features and long range.', '{"battery": "2.9 kWh", "range": "85 km", "charging_time": "3.5 hours", "top_speed": "80 km/h", "motor": "6 kW"}', 1),
('Bajaj Pulsar NS200', 120000, 'Bajaj', 'Petrol', 50, 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 'The Bajaj Pulsar NS200 is a sporty motorcycle with aggressive styling and powerful performance.', '{"engine": "199.5cc", "power": "24.5 PS", "torque": "18.74 Nm", "transmission": "6-speed", "brakes": "Disc", "wheels": "17 inch"}', 1),
('TVS Apache RTR 160 4V', 95000, 'TVS', 'Petrol', 55, 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 'The TVS Apache RTR 160 4V offers sporty performance with advanced features.', '{"engine": "159.7cc", "power": "16.5 PS", "torque": "14.8 Nm", "transmission": "5-speed", "brakes": "Disc", "wheels": "17 inch"}', 1),
('Hero Splendor Plus', 65000, 'Hero', 'Petrol', 60, 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 'The Hero Splendor Plus is known for its fuel efficiency and low maintenance costs.', '{"engine": "97.2cc", "power": "8.02 PS", "torque": "8.05 Nm", "transmission": "4-speed", "brakes": "Drum", "wheels": "18 inch"}', 1),
('Yamaha FZ-S V3', 110000, 'Yamaha', 'Petrol', 48, 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 'The Yamaha FZ-S V3 combines style and performance with modern features.', '{"engine": "149cc", "power": "12.4 PS", "torque": "13.6 Nm", "transmission": "5-speed", "brakes": "Disc", "wheels": "17 inch"}', 1),
('Royal Enfield Classic 350', 180000, 'Royal Enfield', 'Petrol', 35, 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 'The Royal Enfield Classic 350 is a timeless motorcycle with vintage appeal.', '{"engine": "349cc", "power": "20.2 PS", "torque": "27 Nm", "transmission": "5-speed", "brakes": "Disc", "wheels": "19 inch"}', 1),
('KTM Duke 200', 200000, 'KTM', 'Petrol', 35, 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 'The KTM Duke 200 is a performance-oriented motorcycle with aggressive styling.', '{"engine": "199.5cc", "power": "25 PS", "torque": "19.2 Nm", "transmission": "6-speed", "brakes": "Disc", "wheels": "17 inch"}', 1);

-- Insert used bikes
INSERT INTO used_bikes (name, price, brand, fuelType, mileage, image, seller, seller_contact, year_of_purchase, condition_rating, description) VALUES
('Suzuki Access 125', 50000, 'Suzuki', 'Petrol', 40, 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 'Ravi Kumar', '9876543210', 2020, 4, 'Well maintained scooter with regular service history. Single owner.'),
('TVS Jupiter', 40000, 'TVS', 'Petrol', 42, 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 'Amit Singh', '9876543211', 2019, 3, 'Good condition scooter with minor scratches. All documents available.'),
('Honda Shine', 45000, 'Honda', 'Petrol', 55, 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 'Priya Sharma', '9876543212', 2021, 4, 'Excellent condition bike with low mileage. First owner.'),
('Bajaj Pulsar 150', 55000, 'Bajaj', 'Petrol', 45, 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 'Rajesh Patel', '9876543213', 2020, 3, 'Good running condition with some wear and tear. Service records available.');

-- Insert showrooms
INSERT INTO showrooms (name, address, contact, city, state, pincode, services) VALUES
('Honda Showroom - MG Road', '123 MG Road, Bangalore', '080-12345678', 'Bangalore', 'Karnataka', '560001', '["Sales", "Service", "Spare Parts", "Test Rides"]'),
('Ather Space - Indiranagar', '456 Indiranagar, Bangalore', '080-87654321', 'Bangalore', 'Karnataka', '560038', '["Sales", "Service", "Charging Station", "Test Rides"]'),
('Bajaj Showroom - Koramangala', '789 Koramangala, Bangalore', '080-11223344', 'Bangalore', 'Karnataka', '560034', '["Sales", "Service", "Spare Parts", "Test Rides"]'),
('TVS Showroom - Whitefield', '321 Whitefield, Bangalore', '080-55667788', 'Bangalore', 'Karnataka', '560066', '["Sales", "Service", "Spare Parts", "Test Rides"]'),
('Yamaha Showroom - Electronic City', '654 Electronic City, Bangalore', '080-99887766', 'Bangalore', 'Karnataka', '560100', '["Sales", "Service", "Spare Parts", "Test Rides"]');

-- Insert upcoming launches
INSERT INTO upcoming_launches (name, brand, launch_date, image, expected_price, description) VALUES
('Hero EV', 'Hero', '2025-12-01', 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 80000, 'Hero''s first electric scooter with advanced features and long range.'),
('Suzuki e-Bike', 'Suzuki', '2025-11-15', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 120000, 'Suzuki''s premium electric motorcycle with sporty design.'),
('Bajaj Electric Pulsar', 'Bajaj', '2025-10-20', 'https://images.unsplash.com/photo-1566479179817-c0d9d2b2b0b0?w=400', 150000, 'Electric version of the popular Pulsar series.'),
('TVS Electric Apache', 'TVS', '2025-09-30', 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400', 180000, 'Electric Apache with racing DNA and advanced technology.');

-- Insert some sample reviews
INSERT INTO reviews (user_id, bike_id, rating, comment) VALUES
(2, 1, 5, 'Excellent scooter! Very fuel efficient and reliable. Perfect for daily commuting.'),
(3, 2, 4, 'Great electric scooter with good range. Charging is convenient and the build quality is solid.'),
(2, 3, 4, 'Powerful bike with good performance. The design is sporty and attractive.'),
(3, 4, 5, 'Amazing bike! Great value for money with excellent features and performance.'),
(2, 5, 5, 'Very fuel efficient bike. Perfect for long rides and daily use. Low maintenance cost.');

-- Insert some sample favorites
INSERT INTO user_favorites (user_id, bike_id) VALUES
(2, 1),
(2, 3),
(3, 2),
(3, 4);

-- Insert some sample test ride bookings
INSERT INTO test_ride_bookings (user_id, showroom_id, bike_id, booking_date, booking_time, contact_number, status) VALUES
(2, 1, 1, '2024-02-15', '10:00:00', '9876543210', 'confirmed'),
(3, 2, 2, '2024-02-16', '14:30:00', '9876543211', 'pending');

-- Insert some sample price alerts
INSERT INTO price_alerts (user_id, bike_id, target_price) VALUES
(2, 1, 70000),
(3, 2, 140000);
