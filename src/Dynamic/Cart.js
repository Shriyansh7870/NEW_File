import React, { useState } from "react";
import axios from "axios";

const Cart = ({ Id, email }) => {
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://ecommercebackend-q2uy.onrender.com/add-to-cart",
        {
          email: email,
          Id: Id,
        }
      );

      console.log(response.data);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding product to cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {Id}</p>
      <button onClick={addToCart} disabled={loading}>
        {loading ? "Adding to Cart..." : "Add to Cart"}
      </button>
    </div>
  );
};

export default Cart;
