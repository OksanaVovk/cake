import { createSlice } from '@reduxjs/toolkit';
import { Basa } from 'Basa';

const productsInitialState = {
  productsBase: [],
  filterWord: 'Торти',
  filterProducts: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    fetchProducts(state, action) {
      state.productsBase = Basa;
    },

    filterProd(state, action) {
      state.filterWord = action.payload;
      state.filterProducts = state.productsBase.filter(
        product => product.category === action.payload
      );
    },
  },
});

export const { fetchProducts, filterProd } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
