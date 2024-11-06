// routes/adminRoutes.js
const express = require('express');
const { login, protect, register } = require('../controllers/adminControllers');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Admin login
router.post('/login', login);

// Admin registration
router.post('/register', register);

// Get all appointments (protected)
router.get('/appointments', protect, async (req, res) => {
  const appointments = await Appointment.find({});
  res.json(appointments);
});

// Update appointment status (protected)
router.put('/appointments/:id', protect, async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (appointment) {
    appointment.status = req.body.status;
    await appointment.save();
    res.json({ message: 'Appointment updated successfully' });
  } else {
    res.status(404).json({ message: 'Appointment not found' });
  }
});

module.exports = router;
