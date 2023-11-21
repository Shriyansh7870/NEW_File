import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const PlaceOrder = () => {
  const location = useLocation();

  const total = location.state.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <>
      <h1 className="checkout">CheckOut</h1>
      <hr></hr>
      <div className="checkout-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="card">Credit Card Number:</label>
            <input type="text" id="card" name="card" required />
          </div>

          <div className="form-group">
            <label htmlFor="expiry">Card Expiry:</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <NavLink to="/finalMessage">
            <button type="submit">Place Order</button>
          </NavLink>
        </form>
        <div className="order-details">
          {location.state.map((item) => {
            return (
              <>
                <h2>{item.model}</h2>
                <hr></hr>
                <h2 className="cartprice">
                  {"₹ " + item.price * item.quantity}
                </h2>
              </>
            );
          })}
          <hr></hr>
          <h1>Total :{total}</h1>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
