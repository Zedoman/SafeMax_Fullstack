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
   git clone https://github.com/Zedoman/SafeMax_Fullstack
   cd SafeMax_Fullstack

2. **Install dependencies for the backend**
   ```bash
   cd server
   npm install

3. **Install dependencies for the frontend**
   ```bash
   cd clients
   npm install

### Environment Variables
Create a .env file in the server directory with the following variables:

1. ```bash
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ADMIN_REGISTRATION_KEY=key [any key just to check if the key is same or not while registering]


### Running the Application

1. **Run the backend server**

   ```bash
   cd server
   nodemon app.js

2. **Run the frontend server**

   ```bash
   cd clients
   npm start


### Access the application

Landing Page: http://localhost:3000 <br>
Admin Dashboard: http://localhost:3000/admin <br>


### Key	Description
MONGO_URI	MongoDB connection string <br>
JWT_SECRET	Secret key for JWT authentication <br>
PORT	Port for the server (default: 5000) <br>

### Folder Structure

safemax-security/
├── clients/               # React frontend  
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
│   └── app.js         # Server entry point  
└── README.md  



### Available Scripts
1. **Backend** <br>
nodemon app.js: Runs the server in production mode. <br>
npm run dev: Runs the server in development mode with nodemon. <br>

2. **Frontend** <br>
npm start: Runs the React app in development mode on http://localhost:3000. <br>

### API Endpoints
1. **Authentication** <br>
POST /api/admin/register - Register a new admin (for initial setup) <br>
POST /api/admin/login - Login as admin <br>

2. **Appointments** <br>
POST /api/appointments - Schedule a new appointment <br>
GET /api/admin/appointments - Get all appointments (Admin only) <br>
PUT /api/admin/appointments/ - Update the status of an appointment (Admin only) <br>


### Screenshots
Landing Page
<img width="1680" alt="Screenshot 2024-11-07 at 00 19 51" src="https://github.com/user-attachments/assets/5ca583b1-2e5e-49bc-b0fd-141e76a83ea5">
<img width="1680" alt="Screenshot 2024-11-07 at 00 20 05" src="https://github.com/user-attachments/assets/811a1757-a24d-4446-828b-68d3ae8ed82a">


Admin Page
<img width="1642" alt="Screenshot 2024-11-07 at 00 21 55" src="https://github.com/user-attachments/assets/e72b74d7-4e79-4cfa-87a7-f2a44703f576">
<img width="1680" alt="Screenshot 2024-11-07 at 00 21 44" src="https://github.com/user-attachments/assets/6540a3a6-d4da-46da-92e5-048c0569ed4b">
<img width="1680" alt="Screenshot 2024-11-07 at 00 21 24" src="https://github.com/user-attachments/assets/e8270dfc-a38a-4c41-858f-098e62a2427e">




### Test Admin checker
1. **Registration** <br>
{ <br>
  "username": "Admin", <br>
  "password": "securepassword", <br>
  "registrationKey": "AdminofSafemax"       //this ia given in .env file can be changes accordingly <br>
} <br>
2. **Login** <br>
{ <br>
  "username": "Admin", <br>
  "password": "securepassword" <br>
}<br>


