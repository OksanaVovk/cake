import { createSlice } from '@reduxjs/toolkit';
import { Basa } from 'Basa';

const productsInitialState = {
  productsBase: [],
  filter: '',
  filterProducts: [],
  randomProducts: [],
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
    random(state, action) {
      for (let i = 0; i < 4; i += 1) {
        state.randomProducts.push(
          state.productsBase[
            Math.floor(Math.random() * state.productsBase.length)
          ]
        );
      }
    },
  },
});

export const { fetchProducts, filter, random } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
