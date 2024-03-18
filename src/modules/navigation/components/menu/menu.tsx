import type { FC } from 'react';
import { MenuList, MenuLink } from '@/modules/navigation/components/menu/menu.styled';
import { menuMock } from '@/modules/navigation/components/menu/mocks';

interface MenuProps {
  isOpenOnMobile: boolean;
}

export const Menu: FC<MenuProps> = ({ isOpenOnMobile }) => (
  <MenuList isOpenOnMobile={isOpenOnMobile}>
    {menuMock.map(({ title, url }) => (
      <li key={url}>
        <MenuLink href={url}>{title}</MenuLink>
      </li>
    ))}
  </MenuList>
);
