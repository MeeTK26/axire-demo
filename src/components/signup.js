// SignUp.js
import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './SignUp.css'; // Importing the CSS file
import { UserContext } from '../context/UserContext';

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    alert('signup successful');
    console.log( formData);
  };

  return (
    <Container fluid className="signup-container">
      <div className="signup-content">
        <h2 className="text-center mb-4">User Sign Up</h2>
        <Form className="signup-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              style={{ margin: '10px' }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={{ margin: '10px' }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              style={{ margin: '10px' }}
              required
            />
          </Form.Group>
          <Button
            className="signup-btn"
            variant="outline-dark"
            type="submit"
            style={{ margin: '10px' }}
            block
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
