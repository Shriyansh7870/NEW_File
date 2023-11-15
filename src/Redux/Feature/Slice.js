import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Separate API call function
const addToCartApi = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/addToCart",
      payload
    );
    console.log("added to cart", response.data);
    return response.data; // Return the response for potential use in the component
  } catch (err) {
    console.error("Error adding to cart", err);
    throw err; // Rethrow the error to handle it in the component if needed
  }
};

const AddtoCart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    loginAlert: false, // Added state for login alert
  },

  reducers: {
    addtoCart: (state, action) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.cart.push(action.payload);
        state.loginAlert = false; // Reset the login alert state
        // You can call the API function here if needed
      } else {
        state.loginAlert = true; // Set the login alert state
      }
    },
    RemoveItem: (state, action) => {
      // Handling RemoveItem logic...
    },
  },
});

export const { addtoCart, RemoveItem } = AddtoCart.actions;

// Export the reducer
export default AddtoCart.reducer;

// Export the API call function for potential use in the component
export { addToCartApi };
