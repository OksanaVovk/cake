import { createSlice } from '@reduxjs/toolkit';

const basketInitialState = {
  basketProducts: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState: basketInitialState,
  reducers: {
    addProduct(state, action) {
      const index = state.basketProducts.indexOf(
        product => product.id === action.payload.id
      );
      if (action.payload.unit === 'шт' && index) {
        state.basketProducts.splice(index, 1);
        state.basketProducts.push(action.payload);
      } else {
        state.basketProducts.push(action.payload);
      }

      // if (action.payload.unit === 'кг') {
      //   state.basketProducts.push(action.payload);
      // } else if (index) {
      //   state.basketProducts.splice(index, 1);
      //   state.basketProducts.push(action.payload);
      // } else {
      //   state.basketProducts.push(action.payload);
      // }
    },

    deleteProduct(state, action) {
      const index = state.basketProducts.indexOf(
        product => product.id === action.payload
      );
      state.basketProducts.splice(index, 1);
    },
    clearState(state, action) {
      state.basketProducts = [];
    },
  },
});

export const { addProduct, deleteProduct, clearState } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
