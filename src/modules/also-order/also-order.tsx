import type { FC } from 'react';
import { AlsoOrderListWrapper, AlsoOrderWrapper } from '@/modules/also-order/also-order.styled';
import { Products } from '@/modules/products/products';

export const AlsoOrder: FC = () => (
  <AlsoOrderWrapper>
    <AlsoOrderListWrapper>
      <Products title="С этим товаром заказывают:" hasShowMore={false} columns="three" />
    </AlsoOrderListWrapper>
  </AlsoOrderWrapper>
);
