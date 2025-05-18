import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-between">
          <h1 className="navbar-title">Meals App</h1>
          <div className="auth-buttons">
            <Link to="/sign-in">
              <button className="btn btn-primary me-2" type="button">
                Sign In
              </button>
            </Link>
            <Link to ="/signup"><button className="btn btn-outline-primary" type="button">
              Sign Up
            </button></Link>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Meals App</h1>
          <p>
            Discover delicious meals, add them to your cart, and enjoy seamless
            checkout. Whether you're craving comfort food or a gourmet dish,
            we've got something for everyone!
          </p>
        </div>
       
      </header>
      
    </>
  );
};

export default HomePage;
