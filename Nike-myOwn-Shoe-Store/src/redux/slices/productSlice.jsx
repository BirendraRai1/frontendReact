import { productState } from "../states/productState";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  //initial state value
  initialState: productState,
  //functions to update your state
  reducers: {
    //Add
    add: (state, action) => {
      return state.map((item) => {
        //Find the item
        if (item.id != action.payload.id) return item;
        //Add it to cart
        return {
          ...item,
          added: true,
          quantity: item.quantity + 1,
        };
      });
    },

    //Remove
    remove: (state, action) => {
      console.log("came inside remove ");
      return state.map((item) => {
        //find the item
        if (item.id != action.payload.id) {
          return item;
        }
        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },

    //Empty Cart
    emptyCart: (state, action) => {
      return state.map((item) => {
        return {
          ...item,
          added: false,
          quantity: item.quantity * 0,
        };
      });
    },

    //IncrementProduct
    incrementProduct: (state, action) => {
      //increment logic
      return state.map((item) => {
        if (item.id != action.payload.id) {
          return item;
        }

        //Add it to the cart
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },

    //decrementProduct
    decrementProduct: (state, action) => {
      return state.map((item) => {
        if (item.id != action.payload.id) return item;
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      });
    },
  },
});

export default productSlice;
