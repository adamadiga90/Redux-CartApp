import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIndex: 10,
  cartMenu: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
