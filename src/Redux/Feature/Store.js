import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "../Feature/Slice";

export default configureStore({
  reducer: {
    Cart: Addtocart,
  },
});
