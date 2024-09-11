import { createSlice } from '@reduxjs/toolkit';

const modalsInitialState = {
  basketModal: false,
  successfulOrder: false,
  mobileMenu: false,
};

const modalsSlice = createSlice({
  name: 'prodacts',
  initialState: modalsInitialState,
  reducers: {
    toggleBasket(state, action) {
      state.basketModal = action.payload;
    },
    toggleOrder(state, action) {
      state.successfulOrder = action.payload;
    },
    toggleMenu(state, action) {
      state.mobileMenu = action.payload;
    },
  },
});

export const { toggleBasket, toggleOrder, toggleMenu } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
