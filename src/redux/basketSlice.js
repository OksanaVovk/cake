import { createSlice } from '@reduxjs/toolkit';

const basketInitialState = {
  basketProducts: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketInitialState,
  reducers: {
    addProduct(state, action) {
      const index = state.basketProducts.findIndex(
        product => product.id === action.payload.id
      );
      console.log(index);
      if (action.payload.unit === 'шт' && index !== -1) {
        state.basketProducts.splice(index, 1);
        state.basketProducts.push(action.payload);
      } else {
        state.basketProducts.push(action.payload);
      }
    },

    deleteProduct(state, action) {
      const index = state.basketProducts.findIndex(
        product => product.id === action.payload
      );
      console.log(index);
      state.basketProducts.splice(index, 1);
    },
    clearBasketState(state, ___) {
      state.basketProducts = [];
    },
  },
});

export const { addProduct, deleteProduct, clearBasketState } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;
