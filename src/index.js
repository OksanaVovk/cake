import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/Theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/cake">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
