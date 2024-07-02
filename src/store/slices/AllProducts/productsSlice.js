import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isGetting: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isGetting = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isGetting = false;
        state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
