import styled, { css } from 'styled-components';
import Link from 'next/link';

interface ProductProps {
  columns: 'two' | 'three' | undefined;
}

export const ProductItem = styled.li<ProductProps>`
  ${({ columns }) => {
    if (columns === 'two') {
      return css`
        width: 48.5%;
        margin: 0 3% 24px 0;
      `;
    }
    return css`
      width: 31.5%;
      margin-right: 2.75%;

      &:nth-child(even) {
        margin-right: 2.75%;
      }

      &:nth-child(3n + 3) {
        margin-right: 0;
      }
    `;
  }}

  border: 1px solid ${({ theme }) => theme.colors.Primary};
  box-shadow: 0 3px 7px 0 ${({ theme }) => theme.colors.Primary};
  margin-bottom: 24px;
  border-radius: 10px;
  flex-basis: auto;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:nth-child(even) {
    margin-right: 0;
  }

  @media (max-width: 960px) {
    ${({ columns }) => {
      if (columns === 'two') {
        return css`
          flex-basis: 100%;
          margin: 0 0 24px 0;
          max-width: 100%;
        `;
      }
      return css`
        width: 48.5%;
        flex-basis: auto;
        margin-right: 3%;

        &:nth-child(even) {
          margin-right: 0;
        }

        &:nth-child(3n + 3) {
          margin-right: 0;
        }
      `;
    }}
  }

  @media (max-width: 660px) {
    ${({ columns }) => {
      if (columns === 'three') {
        return css`
          width: 100%;
          margin-right: 0;

          &:nth-child(even) {
            margin-right: 0;
          }

          &:nth-child(3n + 3) {
            margin-right: 0;
          }
        `;
      }
    }}
  }
`;

export const ProductHit = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.Primary};
  color: ${({ theme }) => theme.colors.White};
  font-size: 14px;
  line-height: 1.143;
  text-align: center;
  transform: translate(37px, -24px) rotate(45deg);
  padding: 18px 27px 7px;
  font-weight: 700;
`;

export const ProductFigure = styled.figure`
  a {
    display: block;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const ProductName = styled.p`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  margin: 20px 0;
`;

export const ProductBlock = styled.div`
  display: flex;
`;

export const ProductPrice = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  flex-grow: 1;
  text-align: center;
  flex-basis: 135px;

  @media (max-width: 960px) {
    flex-basis: 50%;
  }
`;

export const ProductOldPrice = styled.li`
  font-size: 16px;
  line-height: 1.4;
  text-decoration: line-through;
  font-weight: 700;
`;

export const ProductNewPrice = styled.li`
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Primary};
`;

export const ProductButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border: none;
  background: none;
  appearance: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.Primary};
  border-radius: 5px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
  padding: 4px 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 500ms;
  transition-property: background-color;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Secondary};
  }

  &:focus {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 15%);
  }

  &:active {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 5%);
  }
`;

interface ProductButtonProps {
  fullWidth?: boolean;
}

export const ProductButton = styled(Button)<ProductButtonProps>`
  ${({ fullWidth }) => {
    if (fullWidth) {
      return css`
        width: 100%;
      `;
    }
    return css`
      width: calc(50% - 8.5px);
    `;
  }}
  margin-bottom: 17px;
  margin-top: 17px;
`;

export const ProductVideoButton = styled(ProductButton)`
  margin-right: 17px;
`;

export const ProductMoreButton = styled(Link)`
  border: none;
  background: none;
  appearance: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.Secondary};
  border-radius: 5px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
  padding: 4px 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 500ms;
  transition-property: background-color;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Secondary};
  }

  &:focus {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 15%);
  }

  &:active {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 5%);
  }
`;
