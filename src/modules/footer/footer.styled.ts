import styled from 'styled-components';
import { Container } from '@/shared/components/container.styled';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.Primary};
  box-shadow: inset 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
`;

export const FooterContainer = styled(Container)`
  padding: 40px 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1170px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled.div`
  flex-basis: 241px;

  @media (max-width: 980px) {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    flex-basis: auto;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  flex-basis: 420px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 20px;

  @media (max-width: 980px) {
    margin-left: 0;
  }

  @media (max-width: 680px) {
    display: block;
    flex-basis: auto;
  }

  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const FooterElement = styled.li`
  font-size: 16px;
  line-height: 1.875;
  flex-basis: 49%;

  a {
    color: ${({ theme }) => theme.colors.White};
    font-size: 16px;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterPhone = styled.div`
  p {
    color: ${({ theme }) => theme.colors.White};
    font-size: 24px;
    margin: 0;
    line-height: 1.3;
  }

  a {
    color: ${({ theme }) => theme.colors.White};
    text-decoration: none;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;
