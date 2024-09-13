import { createSlice } from '@reduxjs/toolkit';
import { Basa } from 'Basa';

const productsInitialState = {
  productsBase: [],
  filter: '',
  filterProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    fetchProducts(state, action) {
      state.productsBase = Basa;
    },

    filter(state, action) {
      state.filter = action.payload;
      state.filterProducts = state.productsBase.filter(
        product => product.category === action.payload
      );
    },
  },
});

export const { fetchProducts, filter } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
