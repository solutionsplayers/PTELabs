import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  droppable_fields: [],
  right_items: [],
  selectedoptions : [],
};

export const FIB_SLICE = createSlice({
  name: "fib",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    set_Fields: (state, action) => {
      state.droppable_fields = action.payload;
    },
    clearId: (state) => {
      state.id = null;
    },
    clear_fields: (state) => {
      state.droppable_fields = [];
    },
    set_right_items: (state, action) => {
      state.right_items = action.payload;
    },
    setSelectedOptions :(state, action) =>{
      state.selectedoptions = action.payload
    }
  },
});
export const { setId, clearId, set_Fields, clear_fields, set_right_items, setSelectedOptions } =
  FIB_SLICE.actions;

export default FIB_SLICE.reducer;
