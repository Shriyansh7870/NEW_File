import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const AddtoCart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
      axios
        .post("http://localhost:4000/api/addToCart", action.payload)
        .then((res) => {
          console.log("added to cart", res.data);
        })
        .catch((err) => console.log("found err", err));
    },
    RemoveItem: (state, action) => {
      // state.cart=state.cart.filter((item)=>item.id !==action.payload.id)
      // const index = state.cart.findIndex(
      //     (item) => item.id === action.payload.id
      //   );
      if (action.id !== -1) {
        const bye = action.payload;

        // state.cart.splice(action.payload.id, 1);
        axios
          .post("http://localhost:4000/api/deleteCart", bye)
          .then((res) => {
            console.log("delete to cart", res.data);
          })
          .catch((err) => console.log("found err", err));
      }
    },
  },
});

export default AddtoCart.reducer;
export const { addtoCart, RemoveItem } = AddtoCart.actions;
