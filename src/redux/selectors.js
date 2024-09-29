const selectProductsBase = state => state.products.productsBase;
const selectFilterWord = state => state.products.filterWord;
const selectFilterProducts = state => state.products.filterProducts;
const selectBasketModal = state => state.modals.basketModal;
const selectSuccessfulOrder = state => state.modals.successfulOrder;
const selectMobileMenu = state => state.modals.mobileMenu;
const selectBasketProdukts = state => state.basket.basketProducts;
const selectShowModal = state => state.modals.showModal;

export const selectors = {
  selectProductsBase,
  selectFilterWord,
  selectFilterProducts,
  selectBasketModal,
  selectMobileMenu,
  selectSuccessfulOrder,
  selectShowModal,
  selectBasketProdukts,
};
