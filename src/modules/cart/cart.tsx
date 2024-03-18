import { Container } from '@/shared/components/container.styled';
import { CartTableItog, CartTableWrapper, CartTitle } from '@/modules/cart/cart.styled';
import { FormOrder } from '@/modules/cart/components/form-order/form-order';
import type { FC } from 'react';
import { useAppSelector } from '@/shared/store/hooks';
import { CartItem } from '@/modules/cart/components/cart-item';

export const Cart: FC = () => {
  const products = useAppSelector(state => state.cart.productsInCart) || {};

  const productsList = Object.values(products);
  const hasProducts = productsList.length > 0;
  const totalPrice = productsList.reduce((acc, { count, price }) => {
    const fullPrice = (count || 1) * +price;

    return acc + fullPrice;
  }, 0);

  return (
    <Container maxWidth="1170px">
      <CartTitle hasProducts={hasProducts}>
        {hasProducts ? 'Корзина' : 'В корзине нет товаров'}
      </CartTitle>
      {hasProducts && (
        <>
          <CartTableWrapper>
            <table>
              <tbody>
                <tr>
                  <th>№</th>
                  <th>Название товара</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Общая стоимость</th>
                  <th />
                </tr>
                {productsList.map(({ title, price, count, _id }, index) => (
                  <CartItem
                    key={_id}
                    id={_id}
                    num={index + 1}
                    title={title}
                    price={price}
                    count={count}
                  />
                ))}
                <tr>
                  <CartTableItog colSpan={6}>
                    <span>Итого: {totalPrice} руб</span>
                  </CartTableItog>
                </tr>
              </tbody>
            </table>
          </CartTableWrapper>
          <FormOrder />
        </>
      )}
    </Container>
  );
};
