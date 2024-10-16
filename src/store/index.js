import { configureStore } from "@reduxjs/toolkit";
import artSlice from "./features/arts/art.slice";
import FIB_SLICE from "./features/reading/FIB_Slice";
import MCQ_SLICE from "./features/reading/MCQ_Slice";
import itemsSlice from "./features/reading/dragDropSlice";


const store = configureStore({
  reducer: {
    art: artSlice,
    fib: FIB_SLICE,
    mcq: MCQ_SLICE,
    items: itemsSlice,
  },
});

export default store;
