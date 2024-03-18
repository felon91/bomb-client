import type { FC } from 'react';
import { NavigationWrapper, NavigationWrap } from '@/modules/navigation/navigation.styled';
import { Hamburger } from '@/modules/navigation/components/hamburger/hamburger';
import { Menu } from '@/modules/navigation/components/menu/menu';
import { useState } from 'react';

export const Navigation: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <NavigationWrapper>
      <NavigationWrap>
        <Hamburger onClick={setIsOpenMenu} />
        <Menu isOpenOnMobile={isOpenMenu} />
      </NavigationWrap>
    </NavigationWrapper>
  );
};
