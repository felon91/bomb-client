import styled from 'styled-components';
import shoppingCart from './img/shopping-cart.svg';
import Link from 'next/link';

export const CartLink = styled(Link)`
  display: block;
  background: url(${shoppingCart}) center no-repeat;
  background-size: 35px;
  width: 60px;
  height: 60px;
  position: relative;
`;

export const CartCount = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.Black};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.White};
  font-size: 12px;
  line-height: 23px;
  text-align: center;
`;
