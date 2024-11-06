// server/models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateTime: { type: Date, required: true },
  comments: String,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
