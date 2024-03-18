import type { FC } from 'react';
import {
  CartTableCount,
  CartTableDel,
  CartTableDeleteButton,
  CartTableName,
  CartTableNumber,
  CartTablePrice,
} from '@/modules/cart/cart.styled';
import { useAppDispatch } from '@/shared/store/hooks';
import { removeProductFromCart } from '@/shared/store/reducers/cart-slice';

interface CartItemProps {
  id: string;
  num: number;
  title: string;
  price: string;
  count?: number;
}

export const CartItem: FC<CartItemProps> = ({ num, title, price, count, id }) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <tr>
      <CartTableNumber>{num}</CartTableNumber>
      <CartTableName>{title}</CartTableName>
      <CartTablePrice>{price} руб</CartTablePrice>
      <CartTableCount />
      <CartTableDel>
        <CartTableDeleteButton type="button" onClick={deleteProduct}>
          Удалить
        </CartTableDeleteButton>
      </CartTableDel>
    </tr>
  );
};
