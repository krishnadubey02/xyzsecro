
// CheckoutPage.js
import React from 'react';
import './App.css';

function CheckoutPage() {
    return (
        <div className="checkout-container">
            <header className="checkout-header">
                <img src="logo.png" alt="Anshuka Yoga Logo" className="logo-image" />
                <h1>Anshuka Yoga</h1>
            </header>

            <div className="checkout-form">
                <form>
                    <div className="form-row">
                        <input type="text" placeholder="First Name *" required />
                        <input type="text" placeholder="Last Name *" required />
                    </div>

                    <div className="form-row">
                        <input type="tel" placeholder="Phone *" required />
                        <input type="email" placeholder="Your E-Mail Address *" required />
                    </div>

                    <textarea placeholder="Notes to Business (your address or any special notes about your order)" />

                    <table className="order-summary">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12 Custom Private Classes with Anshuka Parwani</td>
                                <td>
                                    <input type="number" defaultValue="1" min="1" />
                                </td>
                                <td>₹118,000.00</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="total-price">Total: ₹118,000.00</p>

                    <button className="checkout-button">Pay Now and Complete Order</button>
                </form>
            </div>
        </div>
    );
}


export default CheckoutPage;