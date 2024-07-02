import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOneProduct = createAsyncThunk('product/getOneProduct', async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
});

const oneProductSlice = createSlice({
  name: 'product',
  initialState: {
    product: null,
    isGetting: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneProduct.pending, (state) => {
        state.isGetting = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isGetting = false;
        state.product = action.payload;
      });
  },
});

export default oneProductSlice.reducer;
