import styled from 'styled-components';

export const ProductsTitle = styled.h3`
  font-size: 30px;
  line-height: 1.333;
  font-weight: 700;
  margin: 25px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
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

export const ProductsShowMore = styled(Button)`
  background-color: ${({ theme }) => theme.colors.Secondary};
  width: 265px;
  margin: 0 auto 35px;
`;
