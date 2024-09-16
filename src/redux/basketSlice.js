import { createSlice } from '@reduxjs/toolkit';

const basketInitialState = {
  basketProducts: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketInitialState,
  reducers: {
    addProduct(state, action) {
      state.basketProducts.push(action.payload);
    },

    deleteProduct(state, action) {
      const index = state.basketProducts.indexOf(
        product => product.id === action.payload
      );
      state.basketProducts.splice(index, 1);
    },
  },
});

export const { addProduct, deleteProduct } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
