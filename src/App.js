import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from './components/signup';
import Login from "./components/login";
import Mail from "./components/emailform";
import Food from "./components/fooditem";
import Addfood from "./components/addfood";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Home Page</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/mail">Send Email</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/food">Food Items</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addfood">Add Food</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/food" element={<Food />} />
            <Route path="/addfood" element={<Addfood />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
