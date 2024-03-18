import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICategories } from '@/shared/services/product-categories/models';

export const ProductCategoriesAPI = createApi({
  reducerPath: 'ProductCategoriesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: build => ({
    getAllCategories: build.query<ICategories[], null>({
      query: () => '/categories/',
    }),
    getCategoryBySlug: build.query<ICategories, string>({
      query: slug => `/categories/slug/${slug}`,
    }),
  }),
});

export const {
  endpoints,
  util: { getRunningQueriesThunk },
} = ProductCategoriesAPI;
export const { getAllCategories, getCategoryBySlug } = endpoints;
