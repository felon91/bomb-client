import styled, { css } from 'styled-components';
import Link from 'next/link';

interface MenuListProps {
  isOpenOnMobile: boolean;
}

export const MenuList = styled.ul<MenuListProps>`
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;

  @media (max-width: 980px) {
    ${({ isOpenOnMobile }) => {
      if (isOpenOnMobile) {
        return css`
          display: block;
        `;
      }
      return css`
        display: none;
      `;
    }}
    margin-top: 15px;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.White};
  padding: 18px 15px;
  display: block;
  transition-duration: 500ms;
  transition-property: background-color;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Secondary};
  }

  &:focus {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 15%);
  }

  &:active {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 5%);
  }

  @media (max-width: 1110px) {
    font-weight: 400;
    padding: 16px 10px;
  }

  @media (max-width: 980px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
