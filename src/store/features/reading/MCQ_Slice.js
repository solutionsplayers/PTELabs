import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_selected: [],
};

export const MCQ_SLICE = createSlice({
  name: "mcq",
  initialState,
  reducers: {
    setUser_selected: (state, action) => {
      state.user_selected = action.payload;
    },
  },
});
export const { setUser_selected } = MCQ_SLICE.actions;

export default MCQ_SLICE.reducer;
