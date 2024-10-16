import { createAsyncThunk } from '@reduxjs/toolkit';
import { config } from '../../../utils/EndPoints';
import axios from 'axios';

const getArts = createAsyncThunk('art/getArts', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}${config.endPoints.artCollection}`
    );
    return response?.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const createArt = createAsyncThunk('art/createArt', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}${config.endPoints.createArt}`,
      data
    );
    return response?.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export { getArts, createArt };
