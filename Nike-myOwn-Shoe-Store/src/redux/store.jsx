import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import variableSlice from "./slices/variableSlice";
const store = configureStore({
  reducer: {
    productState: productSlice.reducer,
    variableState: variableSlice.reducer,
  },
});

export default store;
