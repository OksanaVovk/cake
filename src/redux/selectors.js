const selectProductsBase = state => state.products.productsBase;
const selectFilter = state => state.products.filter;
const selectFilterProducts = state => state.products.filterProducts;
const selectRandomProducts = state => state.products.randomProducts;
const selectBasketModals = state => state.modals.basketModals;
const selectSuccessfulOrder = state => state.modals.successfulOrder;
const selectMobileMenu = state => state.modals.mobileMenu;

export const selectors = {
  selectProductsBase,
  selectFilter,
  selectFilterProducts,
  selectRandomProducts,
  selectBasketModals,
  selectMobileMenu,
  selectSuccessfulOrder,
};
