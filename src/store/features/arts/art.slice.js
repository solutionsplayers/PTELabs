import { createSlice } from '@reduxjs/toolkit';
import { createArt, getArts } from './art.service';

const initialState = {
  artData: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

export const artSlice = createSlice({
  name: 'art',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getArts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.artData = action.payload;
      })
      .addCase(getArts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(createArt.pending, state => {
        state.isLoading = true;
      })
      .addCase(createArt.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.artData = action.payload;
      })
      .addCase(createArt.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});

export default artSlice.reducer;
