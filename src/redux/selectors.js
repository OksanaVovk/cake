const selectProductsBase = state => state.products.productsBase;
const selectFilter = state => state.products.filter;
const selectFilterProducts = state => state.products.filterProducts;
const selectBasketModals = state => state.modals.basketModals;
const selectSuccessfulOrder = state => state.modals.successfulOrder;
const selectMobileMenu = state => state.modals.mobileMenu;
const selectBasketProdukts = state => state.basket.basketProdukts;

export const selectors = {
  selectProductsBase,
  selectFilter,
  selectFilterProducts,
  selectBasketModals,
  selectMobileMenu,
  selectSuccessfulOrder,
  selectBasketProdukts,
};
