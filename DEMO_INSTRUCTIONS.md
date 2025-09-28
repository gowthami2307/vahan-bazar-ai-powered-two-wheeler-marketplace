# 🚀 Vahan Bazar - Demo Version

## 🎯 Quick Start (No Database Required!)

This is a **demo version** that works without MySQL database. All data is stored in memory and will reset when you refresh the page.

### 📋 Demo Login Credentials

#### 🔑 Admin Account
- **Email:** `admin@demo.com`
- **Password:** `admin123`
- **Access:** Full admin dashboard, can manage bikes and users

#### 👤 User Accounts
- **Email:** `john@demo.com` | **Password:** `user123`
- **Email:** `jane@demo.com` | **Password:** `user123`
- **Access:** Browse bikes, add favorites, write reviews, book test rides

### 🚀 How to Run

1. **Install Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Start the App:**
   ```bash
   npm start
   ```

3. **Open Browser:**
   - Go to `http://localhost:3000`
   - You'll see a blue banner with demo credentials

### ✨ Demo Features

#### 🔐 Authentication
- **Login/Logout** - Full authentication flow
- **User Registration** - Create new accounts
- **Protected Routes** - Admin-only areas
- **Session Management** - Stay logged in

#### 🏍️ Bike Features
- **Browse Bikes** - 8 sample bikes with real data
- **Search & Filter** - Filter by brand, price, fuel type, mileage
- **Bike Details** - Detailed specifications and images
- **Add to Favorites** - Save bikes for later
- **Compare Bikes** - Side-by-side comparison

#### 👤 User Features
- **Favorites** - View saved bikes
- **Reviews** - Rate and review bikes
- **Test Ride Booking** - Book test rides at showrooms
- **Profile Management** - Update user information

#### 🛡️ Admin Features
- **Admin Dashboard** - Access at `/admin` (admin login required)
- **Bike Management** - Add, edit, delete bikes
- **User Management** - View user statistics
- **Analytics** - Platform statistics

### 🎨 UI Features

- **Responsive Design** - Works on mobile and desktop
- **Modern UI** - Clean, professional interface
- **Loading States** - Smooth user experience
- **Toast Notifications** - Real-time feedback
- **Form Validation** - Client-side validation

### 📱 Pages Available

- **Home** (`/`) - Browse all bikes with filters
- **Bikes** (`/bikes`) - All bikes page
- **Used Bikes** (`/used-bikes`) - Used bike listings
- **Showrooms** (`/showrooms`) - Showroom directory
- **Upcoming** (`/upcoming`) - Upcoming bike launches
- **Compare** (`/compare`) - Bike comparison tool
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration
- **Favorites** (`/favorites`) - User's favorite bikes
- **Profile** (`/profile`) - User profile settings
- **Admin** (`/admin`) - Admin dashboard

### 🔧 Technical Details

- **Frontend:** React 18 with modern hooks
- **State Management:** React Context API
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Mock Data:** In-memory storage (resets on refresh)

### 🎯 Testing the App

1. **Start as Guest:**
   - Browse bikes without login
   - Try search and filters
   - View bike details

2. **Login as User:**
   - Use `john@demo.com` / `user123`
   - Add bikes to favorites
   - Write reviews
   - Book test rides

3. **Login as Admin:**
   - Use `admin@demo.com` / `admin123`
   - Access admin dashboard
   - Manage bikes and users
   - View analytics

### 🚨 Important Notes

- **Data Resets:** All data resets when you refresh the page
- **No Backend:** This is a frontend-only demo
- **Mock API:** All API calls are simulated
- **Local Storage:** Login state persists in browser storage

### 🎉 Enjoy Testing!

This demo showcases a complete full-stack application with:
- ✅ Authentication system
- ✅ User management
- ✅ Admin dashboard
- ✅ Modern UI/UX
- ✅ Responsive design
- ✅ Real-time features

**Happy Testing! 🚀**


