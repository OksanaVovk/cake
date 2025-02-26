import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'components/Theme';
import './index.css';
import { store, persistor } from './redux/store';
import ScrollToTop from 'react-scroll-to-top';
import { Scroll } from './components/Scroll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/cake/">
            <Scroll />
            <ScrollToTop />
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
