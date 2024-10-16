import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        leftItems: [],  // Ensure this is an array
        rightItems: [], // Ensure this is an array
    },
    reducers: {
        setLeftItems: (state, action) => {
            state.leftItems = action.payload;
        },
        setRightItems: (state, action) => {
            state.rightItems = action.payload;
        },
        addItemToRight: (state, action) => {
            state.rightItems.push(action.payload);
            state.leftItems = state.leftItems.filter(item => item !== action.payload);
        },
        addItemToLeft: (state, action) => {
            state.leftItems.push(action.payload);
            state.rightItems = state.rightItems.filter(item => item !== action.payload);
        },
    },
});

export const { setLeftItems, setRightItems, addItemToRight, addItemToLeft } = itemsSlice.actions;
export default itemsSlice.reducer;
