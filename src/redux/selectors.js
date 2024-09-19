const selectProductsBase = state => state.products.productsBase;
const selectFilter = state => state.products.filter;
const selectFilterProducts = state => state.products.filterProducts;
const selectBasketModal = state => state.modals.basketModal;
const selectSuccessfulOrder = state => state.modals.successfulOrder;
const selectMobileMenu = state => state.modals.mobileMenu;
const selectBasketProdukts = state => state.basket.basketProducts;
const selectShowModal = state => state.modals.showModal;

export const selectors = {
  selectProductsBase,
  selectFilter,
  selectFilterProducts,
  selectBasketModal,
  selectMobileMenu,
  selectSuccessfulOrder,
  selectShowModal,
  selectBasketProdukts,
};
