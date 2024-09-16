import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productsReducer } from './productsSlice';
import { modalsReducer } from './modalSlice';
import { basketReducer } from './basketSlice';

const basketPersistConfig = {
  key: 'basket',
  storage,
};

export const store = configureStore({
  reducer: {
    basket: persistReducer(basketPersistConfig, basketReducer),
    products: productsReducer,
    modals: modalsReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
