# 🏍️ Vahan Bazar - Two-Wheeler Marketplace

<div align="center">

![Vahan Bazar Logo](https://img.shields.io/badge/Vahan%20Bazar-Two%20Wheeler%20Marketplace-blue?style=for-the-badge&logo=motorcycle)

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-orange?style=flat-square&logo=mysql)](https://mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

**A comprehensive full-stack web application for buying, selling, and comparing two-wheelers with advanced features like EMI calculators, test ride bookings, and admin dashboard.**

[🚀 Live Demo](#-live-demo) • [📖 Documentation](#-documentation) • [🛠️ Installation](#-installation) • [🎯 Features](#-features) • [📱 Screenshots](#-screenshots)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Live Demo](#-live-demo)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎮 Usage](#-usage)
- [📱 Screenshots](#-screenshots)
- [🏗️ Project Structure](#️-project-structure)
- [🔧 API Endpoints](#-api-endpoints)
- [🔐 Authentication](#-authentication)
- [📊 Database Schema](#-database-schema)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

**Vahan Bazar** is a modern, full-stack two-wheeler marketplace that revolutionizes how people buy, sell, and compare motorcycles and scooters. Built with cutting-edge technologies, it provides a seamless experience for both buyers and sellers with advanced features like AI-powered recommendations, EMI calculators, and comprehensive admin management.

### 🎪 Key Highlights

- 🏍️ **Comprehensive Marketplace**: Browse new and used two-wheelers
- 🔍 **Advanced Search & Filters**: Find your perfect ride with smart filtering
- 📊 **Comparison Tools**: Side-by-side bike comparison
- 💰 **Financial Tools**: EMI and fuel cost calculators
- 🏪 **Showroom Integration**: Book test rides and find nearby showrooms
- 👤 **User Management**: Complete authentication and profile system
- 🔧 **Admin Dashboard**: Comprehensive management tools
- 📱 **Responsive Design**: Works perfectly on all devices

---

## ✨ Features

### 🏠 **Core Features**
- **Bike Listings**: Browse 16 new bikes with actual images from reliable sources
- **Advanced Search**: Filter by brand, price, fuel type, mileage, and more
- **Product Details**: Comprehensive specifications, real images, and descriptions
- **Comparison Tool**: Compare up to 2 bikes side-by-side
- **Used Bikes**: 6 pre-owned vehicles with authentic photos
- **Showroom Directory**: Find authorized dealers and service centers
- **Upcoming Launches**: 6 upcoming electric bikes (no images as per design)

### 💰 **Financial Tools**
- **EMI Calculator**: Calculate monthly payments for bike loans
- **Fuel Cost Calculator**: Estimate trip costs and fuel efficiency
- **Price Alerts**: Get notified when prices drop
- **Finance Options**: Multiple payment and financing solutions

### 👤 **User Features**
- **User Registration & Login**: Secure authentication system
- **Profile Management**: Update personal information and preferences
- **Favorites**: Save bikes for later viewing
- **Reviews & Ratings**: Rate and review bikes
- **Test Ride Booking**: Schedule showroom visits
- **Wishlist**: Track desired bikes

### 🔧 **Admin Features**
- **Dashboard**: Comprehensive analytics and statistics
- **Bike Management**: Add, edit, and delete bike listings with image upload
- **User Management**: Monitor and manage user accounts
- **Content Management**: Update showrooms and upcoming launches
- **Reports**: Generate detailed analytics reports
- **Image Management**: Upload and manage bike images

### 🎨 **UI/UX Features**
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Modern Interface**: Clean, intuitive design with smooth animations
- **Dark/Light Theme**: User preference support
- **Accessibility**: WCAG compliant design
- **Performance**: Fast loading and smooth interactions

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2.0** - Modern UI framework
- **React Router 6.8.1** - Client-side routing
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications
- **Axios** - HTTP client

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

### **Database**
- **MySQL** - Primary database (for full setup)
- **Mock Data** - In-memory data for demo mode
- **Sequelize** - ORM (optional)

### **Development Tools**
- **Concurrently** - Run multiple scripts
- **Nodemon** - Development server
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 🚀 Live Demo

### 🌐 **Online Demo**
Visit our live demo: [Vahan Bazar Demo](https://vahan-bazar-vb.vercel.app/)

> **🚀 Successfully deployed on Vercel!** Your demo is live and automatically updates from GitHub.

### 🔑 **Demo Credentials**
```
Admin Account:
Email: admin@demo.com
Password: admin123

User Account:
Email: user@demo.com
Password: user123
```

### 🏍️ **Current Bike Collection**
- **16 New Bikes** with actual images from reliable sources
- **6 Used Bikes** with real motorcycle photos
- **6 Upcoming Bikes** (no images as per design)
- **Total: 28 Bikes** across all categories

### 📱 **Demo Features**
- ✅ Complete bike browsing and filtering
- ✅ User authentication and profiles
- ✅ Admin dashboard functionality
- ✅ EMI and fuel cost calculators
- ✅ Test ride booking system
- ✅ Responsive design on all devices

---

## 📦 Installation

### **Prerequisites**
- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL (v8.0 or higher)
- Git

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Venkatatejadegala/vahan-bazar.git
   cd vahan-bazar
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (frontend + backend + database)
   npm run install-all
   
   # Or install individually
   npm run install-frontend
   npm run install-backend
   npm run install-database
   ```

3. **Set up the database**
   ```bash
   # Create database tables
   npm run db-reset
   ```

4. **Start the application**
   ```bash
   # Start both frontend and backend
   npm start
   
   # Or start individually
   npm run start-frontend  # Frontend on http://localhost:3000
   npm run start-backend   # Backend on http://localhost:5000
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### **Alternative: Demo Mode (No Database)**

For quick testing without MySQL setup:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the demo application
npm start
```

The demo runs on **http://localhost:3000** with mock data and no database required!

### **Deploy Live Demo (5 Minutes)**

To create a live demo URL:

1. **Build the project** (already done):
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel** (Recommended):
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository: `Venkatatejadegala/vahan-bazar`
   - Set Root Directory: `frontend`
   - Deploy automatically

3. **Alternative: Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `frontend/build` folder
   - Get instant URL

4. **Update README** with your new URL:
   - Replace the demo URL with your actual deployment URL
   - Commit and push changes

---

## ⚙️ Configuration

### **Environment Variables**

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=vahan_bazar

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Optional: Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### **Database Setup**

1. **Create MySQL Database**
   ```sql
   CREATE DATABASE vahan_bazar;
   ```

2. **Run Database Scripts**
   ```bash
   # Create tables and seed data
   npm run db-reset
   
   # Or step by step
   npm run db-clear    # Clear existing data
   npm run db-seed     # Add sample data
   npm run db-status   # Check database status
   ```

---

## 🎮 Usage

### **For Users**

1. **Browse Bikes**
   - Visit the homepage to see featured bikes
   - Use filters to narrow down your search
   - Click on any bike for detailed information

2. **Create Account**
   - Click "Sign Up" to create a new account
   - Verify your email address
   - Complete your profile

3. **Use Tools**
   - **EMI Calculator**: Calculate monthly payments
   - **Fuel Calculator**: Estimate trip costs
   - **Compare Bikes**: Side-by-side comparison
   - **Book Test Ride**: Schedule showroom visits

4. **Manage Favorites**
   - Add bikes to your favorites list
   - Access from your profile dashboard
   - Get price alerts for saved bikes

### **For Admins**

1. **Access Admin Dashboard**
   - Login with admin credentials
   - Navigate to Admin Dashboard

2. **Manage Content**
   - Add new bike listings
   - Update existing information
   - Manage user accounts
   - View analytics and reports

3. **Monitor System**
   - Check user registrations
   - Review test ride bookings
   - Monitor system performance

---

## 📱 Screenshots

### **Homepage**
![Homepage](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Homepage+with+Featured+Bikes)

### **Bike Listings**
![Bike Listings](https://via.placeholder.com/800x400/059669/FFFFFF?text=Bike+Listings+with+Filters)

### **Bike Details**
![Bike Details](https://via.placeholder.com/800x400/DC2626/FFFFFF?text=Detailed+Bike+Information)

### **Comparison Tool**
![Comparison](https://via.placeholder.com/800x400/7C3AED/FFFFFF?text=Side-by-Side+Bike+Comparison)

### **Admin Dashboard**
![Admin Dashboard](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Admin+Dashboard+with+Analytics)

### **Mobile View**
![Mobile View](https://via.placeholder.com/400x800/10B981/FFFFFF?text=Responsive+Mobile+Design)

---

## 🏗️ Project Structure

```
vahan-bazar/
├── 📁 frontend/                 # React frontend application
│   ├── 📁 public/              # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable React components
│   │   │   ├── BikeCard.js
│   │   │   ├── BikeList.js
│   │   │   ├── Filters.js
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   ├── Navbar.js
│   │   │   └── ...
│   │   ├── 📁 context/         # React context providers
│   │   │   └── AuthContext.js
│   │   ├── 📁 services/        # API services
│   │   │   └── mockApi.js
│   │   ├── 📁 data/           # Mock data for demo
│   │   │   └── mockData.js
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Global styles
│   │   └── index.js           # Application entry point
│   ├── package.json           # Frontend dependencies
│   └── tailwind.config.js     # Tailwind CSS configuration
├── 📁 backend/                 # Node.js backend application
│   ├── 📁 routes/             # API route handlers
│   │   ├── auth.js
│   │   └── routes.js
│   ├── 📁 middleware/         # Custom middleware
│   │   └── auth.js
│   ├── 📁 models/             # Database models
│   ├── app.js                 # Express application setup
│   ├── package.json           # Backend dependencies
│   └── .env                   # Environment variables
├── 📁 database/               # Database scripts and management
│   ├── create_tables.sql      # Database schema
│   ├── seed.sql              # Sample data
│   └── manage.js             # Database management script
├── 📁 docs/                   # Documentation
├── README.md                  # Project documentation
├── package.json               # Root package configuration
├── setup.js                   # Setup automation script
└── setup-demo.js             # Demo setup script
```

---

## 🔧 API Endpoints

### **Authentication**
```
POST   /api/auth/register      # User registration
POST   /api/auth/login         # User login
GET    /api/auth/profile       # Get user profile
PUT    /api/auth/profile       # Update user profile
```

### **Bikes**
```
GET    /api/bikes              # Get all bikes
GET    /api/bikes/:id          # Get bike by ID
POST   /api/bikes/search       # Search bikes with filters
POST   /api/bikes/compare      # Compare bikes
GET    /api/bikes/brands       # Get all brands
GET    /api/bikes/fuel-types   # Get all fuel types
```

### **Used Bikes**
```
GET    /api/used               # Get all used bikes
GET    /api/used/:id           # Get used bike by ID
```

### **Showrooms**
```
GET    /api/showrooms          # Get all showrooms
GET    /api/showrooms/:id      # Get showroom by ID
```

### **User Features**
```
GET    /api/favorites          # Get user favorites
POST   /api/favorites          # Add to favorites
DELETE /api/favorites/:id      # Remove from favorites
GET    /api/reviews/:bikeId    # Get bike reviews
POST   /api/reviews            # Add review
POST   /api/test-rides         # Book test ride
```

### **Admin**
```
GET    /api/admin/stats        # Get admin statistics
POST   /api/admin/bikes        # Add new bike
PUT    /api/admin/bikes/:id    # Update bike
DELETE /api/admin/bikes/:id    # Delete bike
```

---

## 🔐 Authentication

### **JWT Token System**
- Secure token-based authentication
- 1-hour token expiration
- Automatic token refresh
- Role-based access control

### **Password Security**
- bcryptjs hashing
- Minimum 6 character requirement
- Secure password validation

### **User Roles**
- **User**: Browse, compare, book test rides
- **Admin**: Full system access and management

---

## 📊 Database Schema

### **Core Tables**
- **users**: User accounts and profiles
- **bikes**: 16 new bike listings with real images
- **used_bikes**: 6 pre-owned bike listings with authentic photos
- **showrooms**: Dealer and service center information
- **upcoming_launches**: 6 future electric bike releases (no images)

### **Feature Tables**
- **user_favorites**: User's saved bikes
- **reviews**: Bike ratings and comments
- **test_ride_bookings**: Scheduled showroom visits
- **price_alerts**: Price drop notifications

---

## 🚀 Deployment

### **Frontend Deployment (Netlify/Vercel)**

1. **Build the application**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

3. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### **Backend Deployment (Heroku/Railway)**

1. **Prepare for deployment**
   ```bash
cd backend
   # Ensure all dependencies are in package.json
   ```

2. **Deploy to Heroku**
   ```bash
   heroku create your-app-name
   heroku addons:create cleardb:ignite
   git push heroku main
   ```

3. **Deploy to Railway**
   - Connect your repository
   - Set environment variables
   - Deploy automatically

### **Database Deployment**
- Use managed MySQL services (AWS RDS, Google Cloud SQL)
- Set up connection pooling
- Configure backups and monitoring

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Development Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

### **Issue Reporting**
- Use the issue tracker for bug reports
- Provide detailed reproduction steps
- Include system information
- Add screenshots if applicable

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Vahan Bazar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

### **Technologies & Libraries**
- [React](https://reactjs.org/) - The web framework used
- [Node.js](https://nodejs.org/) - Backend runtime
- [Express.js](https://expressjs.com/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [MySQL](https://mysql.com/) - Database system
- [Lucide React](https://lucide.dev/) - Icon library

### **Image Sources**
- **Auto Punditz** - High-quality motorcycle images
- **BikeDekho** - Comprehensive bike database
- **Royal Enfield Official** - Official manufacturer images
- **India Today** - News media images
- **ZigWheels** - Automotive media images
- **Yamaha Motor India** - Official manufacturer images

### **Inspiration**
- Modern e-commerce platforms
- Automotive marketplace designs
- User experience best practices
- Accessibility guidelines

### **Contributors**
- **Venkatatejadegala** - Project Lead & Full-Stack Developer
- **Contributors** - See [CONTRIBUTORS.md](CONTRIBUTORS.md)

---

## 📞 Support & Contact

### **Get Help**
- 📧 Email: support@vahanbazar.com
- 💬 Discord: [Join our community](https://discord.gg/vahanbazar)
- 📖 Documentation: [docs.vahanbazar.com](https://docs.vahanbazar.com)
- 🐛 Issues: [GitHub Issues](https://github.com/Venkatatejadegala/vahan-bazar/issues)

### **Stay Updated**
- ⭐ Star this repository
- 👀 Watch for updates
- 🍴 Fork for your own use
- 📢 Share with others

---

<div align="center">

**⭐ If you found this project helpful, please give it a star! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/Venkatatejadegala/vahan-bazar?style=social)](https://github.com/Venkatatejadegala/vahan-bazar/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Venkatatejadegala/vahan-bazar?style=social)](https://github.com/Venkatatejadegala/vahan-bazar/network)
[![GitHub watchers](https://img.shields.io/github/watchers/Venkatatejadegala/vahan-bazar?style=social)](https://github.com/Venkatatejadegala/vahan-bazar/watchers)

**Made with ❤️ by [BYTEBREAKERS](https://github.com/gowthami2307/vahan-bazar-ai-powered-two-wheeler-marketplace )**

</div>
