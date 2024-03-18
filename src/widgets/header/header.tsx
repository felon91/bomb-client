import React from 'react';

import { MenuRoutes } from '@/shared/constants/routes/menu';
import { Container } from '@/shared/components/container.styled';
import { Image } from '@/shared/components/image/image';
import { StyledLink } from '@/shared/components/styled-link/styled-link';
import { Tel } from '@/shared/components/tel/tel';
import { BreakPoints, Indents } from '@/shared/types/types';
import { ListItemStyled, ListStyled, LogoStyled, PhonesStyled } from './header.styled';

const containerStyles = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-bottom: ${Indents['8px']};
   
  @media (min-width: ${BreakPoints.sm}) {
    padding-top: ${Indents['10px']};
    padding-bottom: ${Indents['10px']};
  }
   
  @media (min-width: ${BreakPoints.lg}) {
    padding-top: ${Indents['16px']};
    padding-bottom: ${Indents['16px']};
  }  
`;

const HeaderTop: React.FC = () => (
  <Container styles={containerStyles} maxWidth="1230px" padding={Indents['8px']}>
    <LogoStyled href="/">
      <Image src="/img/logo.svg" alt="Bomb.by" width={104} height={33} />
    </LogoStyled>
    <PhonesStyled>
      <Tel phoneNumber="+375(33) 355 34 93" iconSize={11} iconName="phone" />
      <Tel phoneNumber="+375(29) 130 63 12" iconName="viber" />
    </PhonesStyled>
    <ListStyled>
      <li>
        <StyledLink href={MenuRoutes.Celebrations} isBold={false}>
          Проведение торжеств
        </StyledLink>
      </li>
      <ListItemStyled>
        <StyledLink href={MenuRoutes.Wholesale} isBold={false}>
          Оптовым клиентам
        </StyledLink>
      </ListItemStyled>
    </ListStyled>
  </Container>
);

const Header: React.FC = () => (
  <header className="fixed top-0 z-30 w-full bg-white">
    <HeaderTop />
  </header>
);

export default Header;
