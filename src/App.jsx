import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productsSlice';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './components/SharedLayout';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalSyled';
import NotFound from './pages/NotFound';

const MainPage = lazy(() => import('./pages/MainPage/index'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/index'));
const ProductPage = lazy(() => import('./pages/ProductPage/index'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
