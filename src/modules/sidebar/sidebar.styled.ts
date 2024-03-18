import styled from 'styled-components';

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 25px 0;

  @media (max-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const SidebarItem = styled.li`
  & a {
    font-size: 18px;
    line-height: 1.333;
    color: ${({ theme }) => theme.colors.Black};
    font-weight: 700;
    text-decoration: underline;
    display: flex;
    align-items: center;
    transition-duration: 500ms;
    transition-property: color;
    padding: 12px 0;

    &:hover {
      color: ${({ theme }) => theme.colors.Primary};
    }
  }

  & img {
    margin-right: 12px;
  }

  @media (max-width: 768px) {
    & a {
      font-size: 16px;
    }
  }

  @media (max-width: 680px) {
    width: 49%;
  }

  @media (max-width: 480px) {
    width: 100%;

    & a {
      font-size: 16px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;
