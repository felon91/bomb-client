import type { FC } from 'react';
import { Logo } from '@/shared/components/logo/logo';
import { Phones } from '@/shared/components/phones/phones';
import { Cart } from '@/shared/components/cart/cart';
import { HeaderWrap, HeaderWrapper } from '@/modules/header/header.styled';

export const Header: FC = () => (
  <HeaderWrapper>
    <HeaderWrap>
      <Logo />
      <div className="header__phone">
        <Phones />
      </div>
      <div className="header__cart cart">
        <Cart />
      </div>
    </HeaderWrap>
  </HeaderWrapper>
);
