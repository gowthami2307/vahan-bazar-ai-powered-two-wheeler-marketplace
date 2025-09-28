# 🏍️ Vahan Bazar - Demo Version

A comprehensive two-wheeler marketplace built with React and Node.js, featuring authentication, admin dashboard, and interactive tools.

## 🚀 Quick Start (Demo Mode)

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Setup

1. **Clone or download the project**
2. **Run the demo setup script:**
   ```bash
   node setup-demo.js
   ```
3. **Start the demo:**
   ```bash
   npm run demo
   ```
4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🔑 Demo Login Credentials

### Admin Account
- **Email:** `admin@demo.com`
- **Password:** `admin123`
- **Access:** Full admin dashboard, bike management, user management

### User Account
- **Email:** `john@demo.com`
- **Password:** `user123`
- **Access:** Browse bikes, favorites, profile, test ride booking

## ✨ Features

### 🏠 Public Features
- **Browse Bikes:** View all available bikes with images and details
- **Advanced Filters:** Filter by brand, price, fuel type, mileage
- **Search:** Find bikes by name or specifications
- **Compare Bikes:** Side-by-side comparison of up to 2 bikes
- **EMI Calculator:** Calculate monthly EMI for bike loans
- **Fuel Cost Calculator:** Estimate fuel costs for trips
- **Showrooms:** View showroom locations and services
- **Upcoming Launches:** See upcoming bike launches

### 👤 User Features (Login Required)
- **Favorites:** Save bikes to favorites list
- **Profile Management:** Update username and email
- **Test Ride Booking:** Book test rides at showrooms
- **Reviews & Ratings:** Rate and review bikes

### 🔧 Admin Features (Admin Login Required)
- **Dashboard:** View statistics and analytics
- **Bike Management:** Add, edit, delete bikes
- **User Management:** View and manage users
- **Reports:** Generate various reports

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications
- **Axios** - HTTP client

### Backend (Demo Mode)
- **Mock API** - In-memory data simulation
- **JWT Authentication** - Token-based auth
- **bcryptjs** - Password hashing

### Database (Production Ready)
- **MySQL** - Primary database
- **Sequelize** - ORM (optional)

## 📁 Project Structure

```
vahan-bazar/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # React context (Auth)
│   │   ├── services/        # API services
│   │   ├── data/           # Mock data
│   │   └── App.js          # Main app component
│   ├── public/
│   └── package.json
├── backend/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── middleware/         # Auth middleware
│   ├── models/            # Database models
│   └── app.js             # Express app
├── database/              # Database scripts
│   ├── create_tables.sql  # Database schema
│   ├── seed.sql          # Sample data
│   └── manage.js         # Database management
└── package.json          # Root package.json
```

## 🎯 Key Components

### Authentication System
- JWT-based authentication
- Role-based access control (User/Admin)
- Protected routes
- Login/Register forms

### Bike Management
- CRUD operations for bikes
- Image handling
- Search and filtering
- Comparison functionality

### Interactive Tools
- **EMI Calculator:** Calculate monthly payments
- **Fuel Cost Calculator:** Estimate trip costs
- **Test Ride Booking:** Schedule showroom visits

## 🔧 Development Commands

```bash
# Install all dependencies
npm run install-all

# Start frontend only (demo mode)
npm run demo

# Start full application (with backend)
npm start

# Database management
npm run db-reset    # Clear and seed database
npm run db-seed     # Seed database only
npm run db-clear    # Clear database only
npm run db-status   # Check database status
```

## 🎨 UI/UX Features

- **Responsive Design:** Works on desktop, tablet, and mobile
- **Modern UI:** Clean, professional interface
- **Loading States:** Smooth loading animations
- **Error Handling:** User-friendly error messages
- **Toast Notifications:** Real-time feedback
- **Dark/Light Theme:** (Coming soon)

## 🔒 Security Features

- **JWT Authentication:** Secure token-based auth
- **Password Hashing:** bcryptjs for password security
- **Input Validation:** Form validation and sanitization
- **Rate Limiting:** API rate limiting
- **CORS Protection:** Cross-origin request security

## 📱 Mobile Responsiveness

The application is fully responsive and works seamlessly on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the 'build' folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Deploy with environment variables
```

### Database (MySQL)
- Use the provided SQL scripts
- Set up environment variables
- Run migration scripts

## 🐛 Troubleshooting

### Common Issues

1. **npm command not recognized**
   - Install Node.js from [nodejs.org](https://nodejs.org)
   - Restart your terminal/command prompt

2. **PowerShell execution policy error**
   - Use Command Prompt instead of PowerShell
   - Or run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

3. **Port 3000 already in use**
   - Kill the process: `npx kill-port 3000`
   - Or use a different port: `PORT=3001 npm start`

4. **Dependencies installation fails**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and package-lock.json
   - Run `npm install` again

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Lucide for the beautiful icons
- All contributors and testers

---

**Happy Coding! 🚀**

For support or questions, please open an issue in the repository.
