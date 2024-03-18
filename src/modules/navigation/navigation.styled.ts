import styled from 'styled-components';
import { Container } from '@/shared/components/container.styled';

export const NavigationWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.Primary};
  box-shadow: inset 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
`;

export const NavigationWrap = styled(Container)`
  max-width: 1170px;
  @media (max-width: 980px) {
    padding: 12px 15px;
  }
`;
