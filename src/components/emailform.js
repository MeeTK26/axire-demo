import React, { useState } from 'react';
import axios from 'axios';
import './EmailForm.css';
import { Container, Button } from 'react-bootstrap';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/sendemail', formData);
      console.log(response.data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email!');
    }
  };

  return (
    <div className="container main-container">
      <h2 className="heading">Send Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="form-control"
            required
          />
        </div>
        <Button type='submit' variant="outline-dark centering" >Send Email</Button>
      </form>
    </div>
  );
};

export default EmailForm;
