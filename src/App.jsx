import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectors } from './redux/selectors';
import { fetchProducts } from './redux/productsSlice';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './components/SharedLayout';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalSyled';
import { Modal } from 'components/Modal';
import NotFound from './pages/NotFound';

const MainPage = lazy(() => import('./pages/MainPage/index'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/index'));
const ProductPage = lazy(() => import('./pages/ProductPage/index'));

export const App = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(selectors.selectShowModal);

  useEffect(() => {
    if (showModal) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
    };
  }, [showModal]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Global styles={GlobalStyles} />
      {showModal && <Modal />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
