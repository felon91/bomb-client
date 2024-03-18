import type { FC } from 'react';
import {
  DetailProductDescription,
  DetailProductTitle,
} from '@/modules/detail-product/detail-product.styled';
import { DetailCard } from '@/modules/detail-product/components/detail-card/detail-card';
import { useAppSelector } from '@/shared/store/hooks';

export const DetailProduct: FC = () => {
  const { title, description } = useAppSelector(state => state.products.product) || {};

  return (
    <>
      <DetailProductDescription>
        <DetailProductTitle>{title}</DetailProductTitle>
        {description && (
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, tenetur?</p>
        )}
      </DetailProductDescription>
      <DetailCard />
    </>
  );
};
