import { variableState } from "../states/variableState";
import { createSlice } from "@reduxjs/toolkit";

const variableSlice = createSlice({
  name: "variableSlice",
  initialState: variableState,
  reducers: {
    //Actions
    //Add Item to totalItems
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
    },
    //Set Total Amount
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export default variableSlice;
