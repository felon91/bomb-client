import styled from 'styled-components';
import { Container } from '@/shared/components/container.styled';

export const DetailLayoutContent = styled(Container)`
  background-color: ${({ theme }) => theme.colors.White};
  display: flex;
  flex-wrap: wrap;
  max-width: 1170px;
  padding: 0 15px;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const DetailLayoutContentLeft = styled.div`
  flex-basis: 295px;
  flex-shrink: 0;
  margin-right: 20px;

  @media (max-width: 680px) {
    flex-basis: auto;
    flex-shrink: 1;
    margin-right: 0;
    order: 2;
  }
`;

export const DetailLayoutContentRight = styled.section`
  flex-grow: 1;
  flex-basis: calc(100% - 315px);

  @media (max-width: 680px) {
    flex-basis: auto;
    order: 1;
    width: 100%;
  }
`;
