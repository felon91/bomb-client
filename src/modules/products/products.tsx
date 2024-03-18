import type { FC } from 'react';
import { ProductsList, ProductsTitle, ProductsShowMore } from '@/modules/products/products.styled';
import { Product } from '@/modules/products/components/product/product';
import { useAppSelector } from '@/shared/store/hooks';

interface ProductsProps {
  title?: string;
  hasShowMore?: boolean;
  columns?: 'two' | 'three';
}

export const Products: FC<ProductsProps> = ({
  title = 'Популярные товары',
  hasShowMore = false,
  columns = 'two',
}) => {
  const products = useAppSelector(state => state.products.products.result);
  const { name } = useAppSelector(state => state.categories.activeCategory) || {};

  const hasProducts = products.length > 0;

  return (
    <>
      <ProductsTitle>{name || title}</ProductsTitle>
      {!hasProducts && <p>К сожалению товары в данной категории отсутствуют</p>}
      {hasProducts && (
        <ProductsList>
          {products.map(({ _id, ...rest }) => (
            <Product key={_id} columns={columns} _id={_id} {...rest} />
          ))}
        </ProductsList>
      )}

      {hasShowMore && <ProductsShowMore>Показать еще</ProductsShowMore>}
    </>
  );
};
