import type { Action, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ProductsAPI } from '@/shared/services/products/products';
import type { IProduct } from '@/shared/services/products/models';
import type { GetProductsByCategoryResponse } from '@/shared/services/products/types';

interface ProductState {
  products: GetProductsByCategoryResponse;
  product: IProduct | null;
}

const initialState: ProductState = {
  products: {
    result: [],
    totalCount: 0,
  },
  product: null,
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action: Action & { payload: { products: IProduct[] } }) => ({
      ...state,
      ...action?.payload.products,
    }));
    builder.addMatcher(
      ProductsAPI.endpoints.getAllProducts.matchFulfilled,
      (state, action: PayloadAction<GetProductsByCategoryResponse>) => {
        state.products = action.payload;
      }
    );
    builder.addMatcher(
      ProductsAPI.endpoints.getProductsByCategory.matchFulfilled,
      (state, action: PayloadAction<GetProductsByCategoryResponse>) => {
        state.products = action.payload;
      }
    );
    builder.addMatcher(
      ProductsAPI.endpoints.getProductBySlug.matchFulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.product = action.payload;
      }
    );
    builder.addMatcher(
      ProductsAPI.endpoints.getPopularProducts.matchFulfilled,
      (state, action: PayloadAction<GetProductsByCategoryResponse>) => {
        state.products = action.payload;
      }
    );
  },
});

export default productsSlice.reducer;
