import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchName: "",
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
    // calculatePrice: (state) {
    //   let newPrice = state.cartMenu.reducer((accumulator, currentValue) => )

    // }
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
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
