const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function runCommand(command, cwd) {
  console.log(`\n🔄 Executing: ${command} in ${cwd}`);
  try {
    execSync(command, { stdio: 'inherit', cwd });
    console.log(`✅ Success: ${command}`);
  } catch (error) {
    console.error(`❌ Error: ${command}`);
    console.error(error.message);
    throw error;
  }
}

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

async function setupDemo() {
  try {
    console.log('🚀 Starting Vahan Bazar Demo Setup...\n');

    // Check if we're in the right directory
    if (!checkFileExists('frontend') || !checkFileExists('backend')) {
      throw new Error('Please run this script from the project root directory');
    }

    // Install frontend dependencies
    console.log('📦 Installing frontend dependencies...');
    runCommand('npm install', path.resolve(__dirname, 'frontend'));

    // Install backend dependencies (optional for demo)
    console.log('📦 Installing backend dependencies...');
    try {
      runCommand('npm install', path.resolve(__dirname, 'backend'));
    } catch (error) {
      console.log('⚠️  Backend dependencies failed (this is OK for demo mode)');
    }

    // Create .env file for backend if it doesn't exist
    const envPath = path.resolve(__dirname, 'backend', '.env');
    if (!checkFileExists(envPath)) {
      console.log('📝 Creating .env file for backend...');
      const envContent = `# Backend Configuration
PORT=5000
NODE_ENV=development

# Database Configuration (for production)
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=gunmaxx
DB_NAME=vt

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Frontend URL
FRONTEND_URL=http://localhost:3000
`;
      fs.writeFileSync(envPath, envContent);
      console.log('✅ Created .env file');
    }

    console.log('\n🎉 Setup Complete!');
    console.log('\n📋 Next Steps:');
    console.log('1. Open Command Prompt (not PowerShell)');
    console.log('2. Navigate to the frontend directory: cd frontend');
    console.log('3. Run: npm start');
    console.log('4. Open your browser to: http://localhost:3000');
    console.log('\n🔑 Demo Login Credentials:');
    console.log('   Admin: admin@demo.com / admin123');
    console.log('   User:  john@demo.com / user123');
    console.log('\n💡 Features to test:');
    console.log('   • Browse bikes with filters');
    console.log('   • Login/Register');
    console.log('   • Add to favorites');
    console.log('   • Compare bikes');
    console.log('   • EMI Calculator');
    console.log('   • Fuel Cost Calculator');
    console.log('   • Book test rides');
    console.log('   • Admin dashboard');

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure Node.js is installed');
    console.log('2. Try running: node --version');
    console.log('3. If npm is not recognized, reinstall Node.js');
    console.log('4. Use Command Prompt instead of PowerShell');
    process.exit(1);
  }
}

setupDemo();
