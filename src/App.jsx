import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectors } from './redux/selectors';
import { fetchProducts } from './redux/productsSlice';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './components/SharedLayout';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalSyled';
import { Modal } from 'components/Modal';
import Loader from '../src/components/Loader/Loader';
import NotFound from './pages/NotFound';

const MainPage = lazy(() => import('./pages/MainPage/index'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/index'));
const ProductPage = lazy(() => import('./pages/ProductPage/index'));
const OrderPage = lazy(() => import('./pages/OrderPage/index'));

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const showModal = useSelector(selectors.selectShowModal);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [showModal]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Global styles={GlobalStyles} />
      {showModal && <Modal />}
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
