import type { FC } from 'react';
import { useState } from 'react';
import {
  CartTableCount,
  CartTableDel,
  CartTableDeleteButton,
  CartTableName,
  CartTableNumber,
  CartTablePrice,
  CartTableSumma,
} from '@/modules/cart/cart.styled';
import { useAppDispatch } from '@/shared/store/hooks';
import { removeProductFromCart, updateQuantityProducts } from '@/shared/store/reducers/cart-slice';

interface CartItemProps {
  id: string;
  num: number;
  title: string;
  price: string;
  count?: number;
}

export const CartItem: FC<CartItemProps> = ({ num, title, price, count, id }) => {
  const dispatch = useAppDispatch();
  const [counter, setCounter] = useState(count || 1);
  const fullPrice = counter * +price;
  const handleCounter = (val: number) => {
    setCounter(val);
    dispatch(updateQuantityProducts({ id, count: val }));
  };

  const deleteProduct = () => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <tr>
      <CartTableNumber>{num}</CartTableNumber>
      <CartTableName>{title}</CartTableName>
      <CartTablePrice>{price} руб</CartTablePrice>
      <CartTableCount />
      <CartTableSumma>
        <span>{fullPrice} руб</span>
      </CartTableSumma>
      <CartTableDel>
        <CartTableDeleteButton type="button" onClick={deleteProduct}>
          Удалить
        </CartTableDeleteButton>
      </CartTableDel>
    </tr>
  );
};
