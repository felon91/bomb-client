import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IOrderProduct } from '@/shared/services/order/models';

export const OrderAPI = createApi({
  reducerPath: 'OrderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: build => ({
    sendOrder: build.mutation<boolean, IOrderProduct>({
      query: body => ({
        url: `/orders/`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { endpoints, useSendOrderMutation } = OrderAPI;
