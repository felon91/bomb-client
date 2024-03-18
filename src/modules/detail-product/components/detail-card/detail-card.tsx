import type { FC } from 'react';
import {
  DetailCardButton,
  DetailCardCharacteristics,
  DetailCardCounter,
  DetailCardFigure,
  DetailCardHit,
  DetailCardLeft,
  DetailCardNewPrice,
  DetailCardOldPrice,
  DetailCardPrice,
  DetailCardRight,
  DetailCardVideo,
  DetailCardWrapper,
} from '@/modules/detail-product/components/detail-card/detail-card.styled';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { addProductToCart } from '@/shared/store/reducers/cart-slice';
import { useState } from 'react';
import { usePopup } from '@/shared/components/popup/popup';

const loader = ({ src = '', width = 200, quality = 75 }) =>
  `${process.env.NEXT_PUBLIC_STATIC_URL || ''}${src}?w=${width}&q=${quality}`;

export const DetailCard: FC = () => {
  const [{ isOpen: isOpenProduct }, { open: onOpenProduct, close: onCloseProduct }] = usePopup();
  const product = useAppSelector(state => state.products.product);
  const dispatch = useAppDispatch();
  const [productQuantity, setProductQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const {
    hit,
    title,
    oldPrice,
    price,
    shots,
    video,
    caliber,
    time,
    shotHeight,
    amount,
    imagePath,
  } = product;

  const onCounterChange = (val: number) => {
    setProductQuantity(val);
  };

  const hasCharacters = shotHeight || shots || time || caliber || amount;

  const handleAddToCart = () => {
    onOpenProduct();
    dispatch(addProductToCart({ ...product, count: productQuantity }));
  };

  return (
    <>
      <DetailCardWrapper>
        <DetailCardLeft>
          {hit && (
            <DetailCardHit>
              Хит
              <br /> продаж
            </DetailCardHit>
          )}
          <DetailCardFigure>
            <Image src={imagePath} alt={title || ''} width={200} height={200} loader={loader} />
          </DetailCardFigure>
          <DetailCardPrice>
            {oldPrice && <DetailCardOldPrice>{oldPrice} руб</DetailCardOldPrice>}
            <DetailCardNewPrice>{price} руб</DetailCardNewPrice>
            <DetailCardCounter />
          </DetailCardPrice>
          <DetailCardButton onClick={handleAddToCart}>В корзину</DetailCardButton>
        </DetailCardLeft>
        <DetailCardRight>
          {hasCharacters && (
            <>
              <DetailCardCharacteristics>Характеристики:</DetailCardCharacteristics>
            </>
          )}
          {video && (
            <DetailCardVideo>
              <iframe
                width="560"
                height="315"
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Видео салюта"
              />
            </DetailCardVideo>
          )}
        </DetailCardRight>
      </DetailCardWrapper>
    </>
  );
};
