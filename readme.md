# SafeMax Security - Landing Page with Admin Dashboard

This project is a responsive landing page for SafeMax Security with an integrated admin dashboard. The landing page allows users to schedule consultations, while the admin dashboard enables SafeMax's team to manage and track appointments and inquiries.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## Features

### Landing Page
- **Hero Section**: Engaging headline and call-to-action button.
- **About Us Section**: Overview of SafeMax Security services.
- **Services Section**: Display of key services provided by SafeMax.
- **Why Choose Us Section**: Highlights of what sets SafeMax apart.
- **Testimonials Section**: Client testimonials and feedback.
- **Contact Section**: Appointment scheduling form.
- **Footer Section**: Essential links such as privacy policy, terms, and social media links.

### Admin Dashboard
- **Admin Login**: Secure login with JWT authentication.
- **Appointment Management**: View, update, and manage appointments.
- **Status Update**: Admins can mark appointments as confirmed, pending, or canceled.
- **Content Management**: Admins can view and respond to queries submitted through the contact form.

## Tech Stack
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/safemax-security
   cd safemax-security

2. **Install dependencies for the backend**

cd server
npm install

3. **Install dependencies for the frontend**

cd client
npm install

Environment Variables
Create a .env file in the server directory with the following variables:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ADMIN_REGISTRATION_KEY=key [any key just to check if the key is same or not while registering]


### Running the Application

1. **Run the backend server**

cd server
nodemon app.js

2. **Run the frontend server**

cd client
npm start


### Access the application

Landing Page: http://localhost:3000
Admin Dashboard: http://localhost:3000/admin


Key	Description
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT authentication
PORT	Port for the server (default: 5000)

### Folder Structure

safemax-security/
├── client/               # React frontend  
│   ├── public/           # Static files  
│   ├── src/  
│   │   ├── components/   # Landing page components  
│   │   ├── pages/        # Admin pages  
│   │   ├── App.js        # Main app component  
│   │   └── App.css       # Global styles  
├── server/               # Express backend  
│   ├── config/           # Database and JWT configuration  
│   ├── controllers/      # Route controllers  
│   ├── models/           # Mongoose schemas  
│   ├── routes/           # API routes  
│   ├── middleware/       # Auth and other middleware  
│   └── server.js         # Server entry point  
└── README.md  



### Available Scripts
1. **Backend**
nodemon app.js: Runs the server in production mode.
npm run dev: Runs the server in development mode with nodemon.

2. **Frontend**
npm start: Runs the React app in development mode on http://localhost:3000.

### API Endpoints
1. **Authentication**
POST /api/admin/register - Register a new admin (for initial setup)
POST /api/admin/login - Login as admin

2. **Appointments**
POST /api/appointments - Schedule a new appointment
GET /api/admin/appointments - Get all appointments (Admin only)
PUT /api/admin/appointments/ - Update the status of an appointment (Admin only)


### Screenshots
Landing Page

Admin Page



### Test Admin checker
1. **Registration**
{
  "username": "Admin",
  "password": "securepassword",
  "registrationKey": "AdminofSafemax"       //this ia given in .env file can be changes accordingly
}
2. **Login**
{
  "username": "Admin",
  "password": "securepassword"
}


