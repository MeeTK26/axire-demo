// Login.js
import React, { useState, useContext } from 'react';
import './Login.css'; // Importing the CSS file
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && user.email === formData.email && user.password === formData.password) {
      console.log(user);
      alert('User logged in successfully');
      setError('');
    } else {
      alert('invalid email or password');
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Login</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <Button className="login-btn" type="submit" variant="outline-dark">
            Login
          </Button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
