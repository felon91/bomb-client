import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProduct } from '@/shared/services/products/models';
import type {
  GetProductsByCategoryResponse,
  GetProductsByCategoryInput,
} from '@/shared/services/products/types';

export const ProductsAPI = createApi({
  reducerPath: 'ProductsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: build => ({
    getAllProducts: build.query<GetProductsByCategoryResponse, null>({
      query: () => '/products/',
    }),
    getProductsByCategory: build.query<GetProductsByCategoryResponse, GetProductsByCategoryInput>({
      query: ({ id, count = '', offset = '' }) =>
        `/products/category/products?id=${id}&count=${count}&offset=${offset}`,
    }),
    getProductBySlug: build.query<IProduct, string>({
      query: slug => `/products/slug/${slug}`,
    }),
    getPopularProducts: build.query<GetProductsByCategoryResponse, null>({
      query: () => `/products/popular/products`,
    }),
  }),
});

export const {
  endpoints,
  util: { getRunningQueriesThunk },
} = ProductsAPI;
export const { getAllProducts, getProductsByCategory, getProductBySlug, getPopularProducts } =
  endpoints;
