import styled from 'styled-components';
import { Container } from '@/shared/components/container.styled';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.White};
  z-index: 2;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);

  & + * {
    padding-top: 83px;
  }
`;

export const HeaderWrap = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px 15px;
  max-width: 1170px;
`;
