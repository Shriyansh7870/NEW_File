// import { createSlice } from "@reduxjs/toolkit";

// const AddtoCart = createSlice({
//   name: "Cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     addtoCart: (state, action) => {
//       state.cart.push(action.payload);
//     },
//     RemoveItem: (state, action) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//     },
//   },
// });

// export default AddtoCart.reducer;
// export const { addtoCart, RemoveItem } = AddtoCart.actions;

import { createSlice } from "@reduxjs/toolkit";

const AddtoCart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    RemoveItem: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export default AddtoCart.reducer;
export const { addtoCart, RemoveItem } = AddtoCart.actions;
