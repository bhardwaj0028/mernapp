Deployed Frontend - https://mernapp-orpin.vercel.app/
🍕 Foodie - MERN Stack Food Ordering App
A full-stack food ordering application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to browse food items, add them to cart, and place orders.

https://img.shields.io/badge/React-18.2.0-blue
https://img.shields.io/badge/Node.js-Express-brightgreen
https://img.shields.io/badge/MongoDB-Database-green
https://img.shields.io/badge/Bootstrap-5.0-purple

✨ Features
User Authentication - Sign up and login functionality

Browse Menu - View food items categorized by type

Search Functionality - Search for specific food items

Shopping Cart - Add/remove items with quantity and size options

Order History - View past orders with details

Responsive Design - Works on desktop and mobile devices

🛠️ Tech Stack
Frontend
React.js

React Router DOM

Bootstrap 5

Context API (State Management)

Backend
Node.js

Express.js

MongoDB with Mongoose

JWT Authentication

📦 Installation & Setup
Prerequisites
Node.js (v14 or higher)

MongoDB (local or Atlas)

npm or yarn

1. Clone the Repository

bash

git clone <your-repo-url>
cd foodie-mern-app

2. Install Dependencies
bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

3. Environment Setup
Create a .env file in the backend directory with the following variables:

text
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
4. Run the Application
bash
# Start the backend server (from backend directory)
npm start

# Start the frontend (from frontend directory)
npm start

The app will be available at:

Frontend: http://localhost:3000

Backend: http://localhost:5000

🚀 Usage
Register/Login: Create an account or login to existing account

Browse Menu: View food items organized by categories

Search: Use the search bar to find specific items

Add to Cart: Select quantity and size, then add items to cart

Checkout: Review cart and place order

View Orders: Check order history in "My Orders" section

📁 Project Structure
text
foodie-mern-app/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   └── server.js        # Express server setup
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── screens/     # Page components
│   │   ├── styles/      # CSS files
│   │   └── App.js       # Main App component
│   └── package.json
└── README.md

🔧 Key Components
Navbar: Navigation with cart indicator and auth status

Card: Displays food items with add to cart functionality

Cart: Shopping cart management with checkout

ContextReducer: Global state management for cart

Home: Main page with carousel and food categories


🎨 Styling
Bootstrap 5 for responsive layout

Custom CSS for component-specific styles

Dark theme implementation

📝 API Endpoints
POST /api/creatuser - User registration

POST /api/loginuser - User login

POST /api/foodData - Fetch food items and categories

POST /api/orderData - Place new order

POST /api/myOrderData - Get user's order history

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Developed with ❤️ using the MERN stack.
