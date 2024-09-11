import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { modalsReducer } from './modalSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    modals: modalsReducer,
  },
});
