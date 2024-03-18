import styled, { css } from 'styled-components';

interface CartTitleProps {
  hasProducts?: boolean;
}

export const CartTitle = styled.h1<CartTitleProps>`
  ${({ hasProducts }) => {
    if (hasProducts) {
      return css`
        margin: 25px 0;
      `;
    }
    return css`
      margin: 25px 0 200px;
    `;
  }}

  font-size: 36px;
  line-height: 1.111;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const CartTableWrapper = styled.div`
  width: 100%;
  border-radius: 7px;
  border: 2px solid ${({ theme }) => theme.colors.Primary};
  box-shadow: 0px 3px 7px 0px rgba(0, 175, 181, 0.35);
  margin: 20px 0;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 10px;
  }

  tr {
    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.Primary};
    }
  }

  td,
  th {
    border: 1px solid ${({ theme }) => theme.colors.Primary};
    font-size: 18px;
    line-height: 1.222;
    padding: 11px 0;
    text-align: center;
  }

  th {
    font-weight: 700;
    padding-left: 0;
  }

  a {
    color: $red;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media (max-width: 680px) {
    table {
      min-width: 640px;
    }
  }
`;

export const CartTableNumber = styled.td`
  max-width: 65px;
  min-width: 40px;
`;

export const CartTableName = styled.td`
  text-align: left;
  padding-left: 15px;
  max-width: 460px;
  min-width: 220px;
`;

export const CartTablePrice = styled.td`
  max-width: 110px;
  min-width: 80px;
`;

export const CartTableCount = styled.td`
  max-width: 160px;
  min-width: 140px;
`;

export const CartTableSumma = styled.td`
  max-width: 200px;
  min-width: 115px;
`;

export const CartTableDel = styled.td`
  max-width: 140px;
  min-width: 95px;
`;

export const CartTableDeleteButton = styled.button`
  border: none;
  cursor: pointer;
  box-shadow: none;
  background-color: transparent;
  appearance: none;

  color: ${({ theme }) => theme.colors.Primary};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export const CartTableItog = styled.td`
  text-align: right !important;
  font-size: 24px !important;
  font-weight: 700 !important;
  padding-right: 20px !important;
`;
