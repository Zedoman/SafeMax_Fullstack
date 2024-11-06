// controllers/adminController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/adminModel');

// Generate JWT token for authentication
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Admin Registration Controller
// Register Controller in adminController.js
exports.register = async (req, res) => {
    const { username, password, registrationKey } = req.body;
  
    if (registrationKey !== process.env.ADMIN_REGISTRATION_KEY) {
      return res.status(403).json({ message: 'Invalid registration key' });
    }
  
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Username already taken' });
    }
  
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();
  
    res.status(201).json({ message: 'Admin registered successfully' });
  };
  


// Admin Login Controller
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
  
    // console.log('Admin found:', admin); // Check if the admin is found in the database
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials: user not found' });
    }
  
    const isMatch = await admin.matchPassword(password);
    // console.log('Password match result:', isMatch); // Check if the password matches
  
    if (isMatch) {
      res.json({
        _id: admin._id,
        username: admin.username,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
  


// Protect Middleware for Route Protection
exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.admin = await Admin.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};
