// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './CheckoutPage';
import HomePage from './HomePage';

function App() {
    return (  

      <div className="container">
        <header className="header">
          <div className="logo">
            <img src="logo.png" alt="Anshuka Yoga Logo" className="logo-image" />
          </div>
          <div className="navigation">
            <button className="nav-button">Sign Up</button>
            <button className="nav-button">Login</button>
          </div>
        </header>
  
        <main className="main-content">
          <h1 className="title">Anshuka Yoga</h1>
  
          <div className="package">
            <h2 className="package-title">
              12 Custom Private Classes with Anshuka Parwani
            </h2>
            <p className="price">₹118,000.00</p>
            <p className="pricing-note">
              The above pricing is inclusive of GST.
            </p>
  
            <p className="details">
              <strong>CHOOSE YOUR TIMINGS</strong> <br />
              Classes will be scheduled at mutually discussed timings.
            </p>
  
            <p className="contact-info">
              Get in touch with us on <a href="tel:+919820873167">+91 9820873167</a>{' '}
              for further information.
            </p>
  
            <p className="description">
              (Join us for a magical 60-minute practice on the mat. Get ready to
              flow, align, and feel stronger.) See you on the mat.
            </p>
  
            <p className="validity">Validity - 35 days</p>
  
            <button className="purchase-button">Purchase</button>
          </div>
        </main>
      </div>

    );
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </Router>
    
}

export default App;