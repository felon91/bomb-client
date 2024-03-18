import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '@/shared/services/products/models';

interface ProductState {
  productsInCart: Record<string, IProduct & { count?: number }>;
}

const initialState: ProductState = {
  productsInCart: {},
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct & { count: number }>) => {
      const currentId = action.payload._id;

      state.productsInCart[currentId] = {
        ...action.payload,
        count: (state.productsInCart[currentId]?.count || 0) + action.payload.count,
      };
    },
    updateQuantityProducts: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const currentId = action.payload.id;

      state.productsInCart[currentId].count = action.payload.count;
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      delete state.productsInCart[action.payload];
    },
    clearCart: state => {
      state.productsInCart = {};
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart, updateQuantityProducts, removeProductFromCart, clearCart } =
  cartSlice.actions;
