// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <Container className="text-center mt-5 main-container">
      <h2>Welcome to Demo App</h2>
      <p>Please select one of the options below </p>
      <div className="button-container">
        <Button as={Link} to="/mail" variant="outline-dark">Send Email</Button>
        <Button as={Link} to="/food" variant="outline-dark">Food Items</Button>
        <Button as={Link} to="/addfood" variant="outline-dark">Add Food</Button>
        <Button as={Link} to="/signup" variant="outline-dark">Sign Up</Button>
        <Button as={Link} to="/login" variant="outline-dark">Login</Button>
      </div>
    </Container>
  );
}

export default Home;
