import React, { useState } from 'react';
import axios from 'axios';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', dateTime: '', comments: '' });
  const [message, setMessage] = useState('');
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/appointments`, formData);
      setMessage('Appointment request submitted successfully!');
      setFormData({ name: '', email: '', dateTime: '', comments: '' }); // Clear the form fields
    } catch (error) {
      setMessage('Failed to submit appointment request. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <h2>Schedule a Consultation</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="contact-input"
        />
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          required
          onChange={handleChange}
          className="contact-input"
        />
        <textarea
          name="comments"
          value={formData.comments}
          placeholder="Additional Comments"
          onChange={handleChange}
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">Submit</button>
      </form>
      {message && <p className="contact-message">{message}</p>}
    </section>
  );
};

export default ContactSection;
