import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "./Slice";

export default configureStore({
  reducer: {
    Cart: Addtocart,
  },
});
