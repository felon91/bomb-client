import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePopup } from '@/shared/components/popup/popup';
import {
  ProductBlock,
  ProductButton,
  ProductButtons,
  ProductFigure,
  ProductHit,
  ProductItem,
  ProductMoreButton,
  ProductName,
  ProductNewPrice,
  ProductOldPrice,
  ProductPrice,
  ProductVideoButton,
} from '@/modules/products/components/product/product.styled';
import type { IProduct } from '@/shared/services/products/models';
import { addProductToCart } from '@/shared/store/reducers/cart-slice';
import { useAppDispatch } from '@/shared/store/hooks';
import { useState } from 'react';
import { MainRoutes } from '@/shared/routes/main';

interface ProductProps extends IProduct {
  columns?: 'two' | 'three';
}

const loader = ({ src = '', width = 200, quality = 75 }) =>
  `${process.env.NEXT_PUBLIC_STATIC_URL || ''}${src}?w=${width}&q=${quality}`;

export const Product: FC<ProductProps> = ({ columns = 'two', ...props }) => {
  const { hit, link, price, oldPrice, imagePath, title, video } = props;
  const dispatch = useAppDispatch();
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addProductToCart({ ...props, count: productQuantity }));
  };

  return (
    <>
      <ProductItem columns={columns}>
        {hit && (
          <ProductHit>
            Хит
            <br /> продаж
          </ProductHit>
        )}
        <ProductFigure>
          <Link href={`${MainRoutes.Shop}/${link}`}>
            <Image src={imagePath} alt={title} width={200} height={200} loader={loader} />
          </Link>
        </ProductFigure>
        <ProductName>{title}</ProductName>
        <ProductBlock>
          <ProductPrice>
            {oldPrice && <ProductOldPrice>{oldPrice} руб</ProductOldPrice>}
            <ProductNewPrice>{price} руб</ProductNewPrice>
          </ProductPrice>
        </ProductBlock>
        <ProductButtons>
          <ProductButton fullWidth={!video} onClick={handleAddToCart}>
            В корзину
          </ProductButton>
        </ProductButtons>
        <ProductMoreButton href={`${MainRoutes.Shop}/${link}`}>Подробнее</ProductMoreButton>
      </ProductItem>
    </>
  );
};
