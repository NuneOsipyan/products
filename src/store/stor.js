import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/AllProducts/productsSlice';
import oneProductSlice from './slices/OneProduct/oneProductSlice';

const store = configureStore({
  reducer: {
    products_data: productsSlice,
    product_data: oneProductSlice,
  },
});

export default store;
