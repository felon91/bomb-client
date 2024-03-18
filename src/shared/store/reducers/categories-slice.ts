import type { Action, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductCategoriesAPI } from '@/shared/services/product-categories/product-categories';
import { HYDRATE } from 'next-redux-wrapper';
import type { ICategories } from '@/shared/services/product-categories/models';

interface CategoriesState {
  categories: ICategories[];
  activeCategory: ICategories | null;
}

const initialState: CategoriesState = {
  categories: [],
  activeCategory: null,
};

const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategories[]>) => {
      state.categories = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      HYDRATE,
      (state, action: Action & { payload: { categories: ICategories[] } }) => ({
        ...state,
        ...action?.payload.categories,
      })
    );
    builder.addMatcher(
      ProductCategoriesAPI.endpoints.getAllCategories.matchFulfilled,
      (state, action: PayloadAction<ICategories[]>) => {
        state.categories = action.payload;
      }
    );
    builder.addMatcher(
      ProductCategoriesAPI.endpoints.getCategoryBySlug.matchFulfilled,
      (state, action: PayloadAction<ICategories>) => {
        state.activeCategory = action.payload;
      }
    );
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
