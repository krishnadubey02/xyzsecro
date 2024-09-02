// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './CheckoutPage';
import HomePage from './HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </Router>
    );
}

export default App;