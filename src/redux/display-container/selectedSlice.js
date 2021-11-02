import { createSlice } from "@reduxjs/toolkit";
import { selectedOrRemove } from "../../utilities/selectOrRemoveId";

const initialState = {
  selectedItems: [],
};

export const selectedSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    selectItem: (state, { payload }) => {
      state.selectedItems = selectedOrRemove(payload, state.selectedItems);
    },
  },
});

export const { selectItem } = selectedSlice.actions;

export default selectedSlice.reducer;
