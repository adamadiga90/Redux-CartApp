import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIndex: [],
  value: 1,
  cartMenu: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartIndex.length > 0) {
        state.cartMenu.find((item) => {
          return item.id === action.payload.id
            ? state.cartMenu.push(action.payload.product)
            : null;
        });
      } else {
        state.cartMenu.push(action.payload.product);
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

// login: (state, action) => {
//   state.name = action.payload.name;
//   state.email = action.payload.email;
//   state.isLoggedIn = true;

// const handleLogin = () => {
//   dispatch(login({
//     name: 'John Doe',
//     email: 'john@example.com'
//   }));
// };
