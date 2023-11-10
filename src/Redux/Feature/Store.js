import { configureStore } from "@reduxjs/toolkit";

import AddtoCart from "../Feature/Slice";

export default configureStore({
  reducer: {
    Cart: AddtoCart,
  },
});
