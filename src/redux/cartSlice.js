import { createSlice } from "@reduxjs/toolkit";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../utilis/localStorageUtils";

const initialState = {
  items: getFromLocalStorage("cartItems", []),
  totalQuantity: getFromLocalStorage("cartItems", []).reduce(
    (total, item) => total + item.quantity,
    0
  ),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.items.push({ ...product });
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setToLocalStorage("cartItems", state.items);
    },
    updateCartItem: (state, action) => {
      const { id, size, color, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size && item.color === color
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setToLocalStorage("cartItems", state.items);
    },
    removeFromCart: (state, action) => {
      const { id, size, color } = action.payload;

      state.items = state.items.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      );

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );

      setToLocalStorage("cartItems", state.items);
    },
  },
});

export const { addToCart, updateCartItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
