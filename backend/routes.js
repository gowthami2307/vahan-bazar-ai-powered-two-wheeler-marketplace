const express = require('express');
const { body, validationResult } = require('express-validator');
const pool = require('./dbConfig');
const { authenticateToken, requireAdmin } = require('./middleware/auth');

const router = express.Router();

// Import auth routes
const authRoutes = require('./routes/auth');
router.use('/auth', authRoutes);

// Public routes - no authentication required

// Listings
router.get('/bikes', (req, res) => {
  pool.query('SELECT * FROM bikes ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Search & Filters
router.get('/bikes/search', (req, res) => {
  const { brand, price, fuelType, mileage, search } = req.query;
  let sql = 'SELECT * FROM bikes WHERE 1=1';
  const params = [];
  
  if (search) {
    sql += ' AND (name LIKE ? OR brand LIKE ? OR description LIKE ?)';
    const searchTerm = `%${search}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }
  if (brand) { sql += ' AND brand = ?'; params.push(brand); }
  if (price) { sql += ' AND price <= ?'; params.push(price); }
  if (fuelType) { sql += ' AND fuelType = ?'; params.push(fuelType); }
  if (mileage) { sql += ' AND mileage >= ?'; params.push(mileage); }
  
  sql += ' ORDER BY created_at DESC';
  
  pool.query(sql, params, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Product Page
router.get('/bikes/:id', (req, res) => {
  pool.query('SELECT * FROM bikes WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Bike not found' });
    res.json(results[0]);
  });
});

// Compare Models
router.post('/bikes/compare', (req, res) => {
  const { ids } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) return res.json([]);
  const placeholders = ids.map(() => '?').join(',');
  pool.query(`SELECT * FROM bikes WHERE id IN (${placeholders})`, ids, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Used Bikes
router.get('/used', (req, res) => {
  pool.query('SELECT * FROM used_bikes ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Showrooms & Test Rides
router.get('/showrooms', (req, res) => {
  pool.query('SELECT * FROM showrooms ORDER BY name', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Upcoming Launches
router.get('/upcoming', (req, res) => {
  pool.query('SELECT * FROM upcoming_launches ORDER BY launch_date ASC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get bike brands for filter
router.get('/brands', (req, res) => {
  pool.query('SELECT DISTINCT brand FROM bikes ORDER BY brand', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results.map(row => row.brand));
  });
});

// Get fuel types for filter
router.get('/fuel-types', (req, res) => {
  pool.query('SELECT DISTINCT fuelType FROM bikes ORDER BY fuelType', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results.map(row => row.fuelType));
  });
});

// Protected routes - require authentication

// User favorites
router.post('/favorites', authenticateToken, (req, res) => {
  const { bike_id } = req.body;
  pool.query(
    'INSERT INTO user_favorites (user_id, bike_id) VALUES (?, ?)',
    [req.user.id, bike_id],
    (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Bike already in favorites' });
        }
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Added to favorites' });
    }
  );
});

router.delete('/favorites/:bikeId', authenticateToken, (req, res) => {
  pool.query(
    'DELETE FROM user_favorites WHERE user_id = ? AND bike_id = ?',
    [req.user.id, req.params.bikeId],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Removed from favorites' });
    }
  );
});

router.get('/favorites', authenticateToken, (req, res) => {
  pool.query(
    `SELECT b.* FROM bikes b 
     INNER JOIN user_favorites uf ON b.id = uf.bike_id 
     WHERE uf.user_id = ?`,
    [req.user.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

// Reviews
router.post('/reviews', authenticateToken, [
  body('bike_id').isInt().withMessage('Valid bike ID required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('comment').optional().isLength({ max: 500 }).withMessage('Comment too long')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { bike_id, rating, comment } = req.body;
  pool.query(
    'INSERT INTO reviews (user_id, bike_id, rating, comment) VALUES (?, ?, ?, ?)',
    [req.user.id, bike_id, rating, comment],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Review added successfully' });
    }
  );
});

router.get('/bikes/:id/reviews', (req, res) => {
  pool.query(
    `SELECT r.*, u.username FROM reviews r 
     INNER JOIN users u ON r.user_id = u.id 
     WHERE r.bike_id = ? ORDER BY r.created_at DESC`,
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

// Test ride booking
router.post('/test-rides', authenticateToken, [
  body('showroom_id').isInt().withMessage('Valid showroom ID required'),
  body('bike_id').isInt().withMessage('Valid bike ID required'),
  body('booking_date').isISO8601().withMessage('Valid booking date required'),
  body('booking_time').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Valid time format required'),
  body('contact_number').isMobilePhone().withMessage('Valid contact number required')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { showroom_id, bike_id, booking_date, booking_time, contact_number } = req.body;
  pool.query(
    'INSERT INTO test_ride_bookings (user_id, showroom_id, bike_id, booking_date, booking_time, contact_number) VALUES (?, ?, ?, ?, ?, ?)',
    [req.user.id, showroom_id, bike_id, booking_date, booking_time, contact_number],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Test ride booked successfully', booking_id: results.insertId });
    }
  );
});

// Admin routes - require admin authentication

// Add new bike
router.post('/admin/bikes', authenticateToken, requireAdmin, [
  body('name').notEmpty().withMessage('Bike name is required'),
  body('price').isInt({ min: 1 }).withMessage('Valid price required'),
  body('brand').notEmpty().withMessage('Brand is required'),
  body('fuelType').notEmpty().withMessage('Fuel type is required'),
  body('mileage').isInt({ min: 1 }).withMessage('Valid mileage required')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, price, brand, fuelType, mileage, image, description, specifications } = req.body;
  pool.query(
    'INSERT INTO bikes (name, price, brand, fuelType, mileage, image, description, specifications, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [name, price, brand, fuelType, mileage, image, description, JSON.stringify(specifications), req.user.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Bike added successfully', bike_id: results.insertId });
    }
  );
});

// Update bike
router.put('/admin/bikes/:id', authenticateToken, requireAdmin, (req, res) => {
  const { name, price, brand, fuelType, mileage, image, description, specifications } = req.body;
  const updates = [];
  const values = [];

  if (name) { updates.push('name = ?'); values.push(name); }
  if (price) { updates.push('price = ?'); values.push(price); }
  if (brand) { updates.push('brand = ?'); values.push(brand); }
  if (fuelType) { updates.push('fuelType = ?'); values.push(fuelType); }
  if (mileage) { updates.push('mileage = ?'); values.push(mileage); }
  if (image) { updates.push('image = ?'); values.push(image); }
  if (description) { updates.push('description = ?'); values.push(description); }
  if (specifications) { updates.push('specifications = ?'); values.push(JSON.stringify(specifications)); }

  if (updates.length === 0) {
    return res.status(400).json({ error: 'No valid fields to update' });
  }

  values.push(req.params.id);

  pool.query(
    `UPDATE bikes SET ${updates.join(', ')} WHERE id = ?`,
    values,
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Bike not found' });
      }
      res.json({ message: 'Bike updated successfully' });
    }
  );
});

// Delete bike
router.delete('/admin/bikes/:id', authenticateToken, requireAdmin, (req, res) => {
  pool.query('DELETE FROM bikes WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Bike not found' });
    }
    res.json({ message: 'Bike deleted successfully' });
  });
});

// Admin dashboard stats
router.get('/admin/stats', authenticateToken, requireAdmin, (req, res) => {
  const stats = {};
  
  // Get total bikes
  pool.query('SELECT COUNT(*) as count FROM bikes', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    stats.totalBikes = results[0].count;
    
    // Get total users
    pool.query('SELECT COUNT(*) as count FROM users', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      stats.totalUsers = results[0].count;
      
      // Get total reviews
      pool.query('SELECT COUNT(*) as count FROM reviews', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        stats.totalReviews = results[0].count;
        
        // Get total test ride bookings
        pool.query('SELECT COUNT(*) as count FROM test_ride_bookings', (err, results) => {
          if (err) return res.status(500).json({ error: err.message });
          stats.totalBookings = results[0].count;
          
          res.json(stats);
        });
      });
    });
  });
});

module.exports = router;
