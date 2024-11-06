import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/admin/appointments', {
          headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
        });
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments", error);
      }
    };
    fetchAppointments();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/appointments/${id}`, { status }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
      });
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment._id === id ? { ...appointment, status } : appointment
        )
      );
    } catch (error) {
      console.error("Error updating appointment status", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard-header">
        <h2>Admin Dashboard</h2>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </header>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{new Date(appointment.dateTime).toLocaleString()}</td>
              <td><span className={`status ${appointment.status}`}>{appointment.status}</span></td>
              <td>
                {appointment.status !== 'confirmed' && (
                  <button className="action-button confirm" onClick={() => updateStatus(appointment._id, 'confirmed')}>Confirm</button>
                )}
                {appointment.status !== 'pending' && (
                  <button className="action-button pending" onClick={() => updateStatus(appointment._id, 'pending')}>Pending</button>
                )}
                {appointment.status !== 'canceled' && (
                  <button className="action-button cancel" onClick={() => updateStatus(appointment._id, 'canceled')}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
