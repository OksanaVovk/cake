import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { SharedLayout } from './components/SharedLayout';

import { Global } from '@emotion/react';
import { GlobalStyles } from './components/Global.styled';
import NotFound from './pages/NotFound';

const MainPage = lazy(() => import('./pages/MainPage/index'));

// import { Header } from 'components/Header';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
    <>
      <Global styles={GlobalStyles} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>

    // <>
    //   <Header />
    // </>
  );
};
