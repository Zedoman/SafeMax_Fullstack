// server/routes/appointmentRoutes.js
const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Create an appointment
router.post('/appointments', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

// Get all appointments (for admin)
router.get('/admin/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve appointments' });
  }
});

module.exports = router;
