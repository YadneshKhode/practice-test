import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pincode: "",
};

export const pincodeSlice = createSlice({
  name: "serve",
  initialState,
  reducers: {
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
  },
});

export const { setPincode } = pincodeSlice.actions;

export default pincodeSlice.reducer;
