import type { FC } from 'react';
import { MainRoutes } from '@/shared/routes/main';
import { CartCount, CartLink } from '@/shared/components/cart/cart.styled';
import { VisuallyHidden } from '@/shared/components/visually-hidden';
import { useAppSelector } from '@/shared/store/hooks';

export const Cart: FC = () => {
  const productsInCart = useAppSelector(state => state.cart.productsInCart);
  const totalCount = Object.keys(productsInCart).length;

  return (
    <CartLink passHref href={MainRoutes.Cart}>
      <VisuallyHidden>Корзина</VisuallyHidden>
      <CartCount>{totalCount}</CartCount>
    </CartLink>
  );
};
