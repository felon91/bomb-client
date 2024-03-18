import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { ProductCategoriesAPI } from '@/shared/services/product-categories/product-categories';
import categoriesSlice from '@/shared/store/reducers/categories-slice';
import { ProductsAPI } from '@/shared/services/products/products';
import productsSlice from '@/shared/store/reducers/products-slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { PersistConfig } from 'redux-persist/es/types';
import type { Any } from '@/shared/types/types';
import cartSlice from './reducers/cart-slice';
import { OrderAPI } from '@/shared/services/order/order';
import { isServer } from '@/shared/utils/is-server';

const persistConfig: PersistConfig<Any> = {
  key: 'root',
  storage,
  blacklist: ['ProductCategoriesAPI', 'ProductsAPI', 'OrderAPI', 'categories', 'products'],
};

const rootReducer = combineReducers({
  categories: categoriesSlice,
  products: productsSlice,
  cart: cartSlice,
  [ProductCategoriesAPI.reducerPath]: ProductCategoriesAPI.reducer,
  [ProductsAPI.reducerPath]: ProductsAPI.reducer,
  [OrderAPI.reducerPath]: OrderAPI.reducer,
});

const reducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  if (isServer) {
    return configureStore({
      devTools: process.env.NODE_ENV !== 'production',
      reducer: rootReducer,
      middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        ProductCategoriesAPI.middleware,
        ProductsAPI.middleware,
        OrderAPI.middleware,
      ],
    });
  }

  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({ serializableCheck: false }),
      ProductCategoriesAPI.middleware,
      ProductsAPI.middleware,
      OrderAPI.middleware,
    ],
  });

  // @ts-ignore Nasty hack
  store.__persistor = persistStore(store);
  return store;
};

const store = makeStore();

// { debug: true }
export const reduxWrapper = createWrapper<AppStore>(makeStore);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
type AppStore = ReturnType<typeof makeStore>;
