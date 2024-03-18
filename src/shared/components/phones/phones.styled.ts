import styled from 'styled-components';
import smartphoneCall from './img/smartphone-call.svg';
import viber from './img/viber.svg';
import Link from 'next/link';

export const PhonesBlock = styled.div`
  position: relative;
  padding-left: 35px;

  &::before {
    width: 21px;
    height: 36px;
    background: url(${smartphoneCall}) no-repeat;
    background-size: 21px 36px;
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  }

  p {
    font-size: 20px;
    line-height: 1.3;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.Black};
    text-decoration: none;
    font-weight: 700;
  }
`;

export const ViberPhone = styled(Link)`
  padding-right: 30px;
  background: url(${viber}) right center / 23px no-repeat;
`;
