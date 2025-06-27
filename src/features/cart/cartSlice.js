import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: { name: "", isSearch: false },
  price: 0,
  cartMenu: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const productExist = state.cartMenu.some(
        (item) => item.id === actions.payload.id
      );
      if (!productExist) {
        state.cartMenu.push(actions.payload.product);
      }
    },
    removeFromCart: (state, action) => {
      state.cartMenu = state.cartMenu.filter(
        (item) => item.id !== action.payload.id
      );
      // state.cartMenu = [1];
    },
    changeSearch: (state, action) => {
      state.search.name = action.payload.search;
      state.search.isSearch = true;
    },
    turnSearchDown: (state) => {
      state.search.isSearch = false;
    },
  },
});
export const { addToCart, removeFromCart, changeSearch, turnSearchDown } =
  cartSlice.actions;
export default cartSlice.reducer;
