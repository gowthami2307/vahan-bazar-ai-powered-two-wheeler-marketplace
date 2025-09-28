#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Vahan Bazar Setup Script');
console.log('============================\n');

// Check if Node.js is installed
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  console.log(`✅ Node.js version: ${nodeVersion}`);
} catch (error) {
  console.error('❌ Node.js is not installed. Please install Node.js first.');
  process.exit(1);
}

// Check if MySQL is available
try {
  execSync('mysql --version', { encoding: 'utf8' });
  console.log('✅ MySQL is available');
} catch (error) {
  console.warn('⚠️  MySQL command not found. Please ensure MySQL is installed and accessible.');
}

// Install backend dependencies
console.log('\n📦 Installing backend dependencies...');
try {
  execSync('npm install', { cwd: path.join(__dirname, 'backend'), stdio: 'inherit' });
  console.log('✅ Backend dependencies installed');
} catch (error) {
  console.error('❌ Failed to install backend dependencies');
  process.exit(1);
}

// Install frontend dependencies
console.log('\n📦 Installing frontend dependencies...');
try {
  execSync('npm install', { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });
  console.log('✅ Frontend dependencies installed');
} catch (error) {
  console.error('❌ Failed to install frontend dependencies');
  process.exit(1);
}

// Install database management dependencies
console.log('\n📦 Installing database management dependencies...');
try {
  execSync('npm install mysql2 bcryptjs', { cwd: path.join(__dirname, 'database'), stdio: 'inherit' });
  console.log('✅ Database management dependencies installed');
} catch (error) {
  console.error('❌ Failed to install database management dependencies');
  process.exit(1);
}

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, 'backend', '.env');
if (!fs.existsSync(envPath)) {
  console.log('\n📝 Creating .env file...');
  const envContent = `# Environment Variables for Vahan Bazar Backend

# JWT Secret Key (Change this in production)
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Node Environment
NODE_ENV=development

# Server Port
PORT=5000

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
`;
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created');
} else {
  console.log('✅ .env file already exists');
}

console.log('\n🎉 Setup completed successfully!');
console.log('\n📋 Next Steps:');
console.log('1. Create MySQL database: CREATE DATABASE vt;');
console.log('2. Update database credentials in backend/dbConfig.js');
console.log('3. Run database setup: cd database && node manage.js reset');
console.log('4. Start backend: cd backend && npm run dev');
console.log('5. Start frontend: cd frontend && npm start');
console.log('\n🔑 Default Login Credentials:');
console.log('Admin: admin@vahanbazar.com / admin123');
console.log('User: john@example.com / password123');
console.log('\n📚 For more information, check the README.md file');
