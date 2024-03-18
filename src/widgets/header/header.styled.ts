import styled from 'styled-components';
import { BreakPoints } from '@/shared/types/types';
import { StyledLink } from '@/shared/components/styled-link/styled-link';

export const PhonesStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.indents['12px']};

  @media (min-width: ${BreakPoints.sm}) {
    flex-direction: row;
    margin-top: 0;
    gap: ${({ theme }) => theme.indents['24px']};
  }

  @media (min-width: ${BreakPoints.lg}) {
    margin-right: auto;
  }

  @media (min-width: ${BreakPoints.extraLg}) {
    gap: ${({ theme }) => theme.indents['48px']};
  }
`;

export const LogoStyled = styled(StyledLink)`
  flex-shrink: 0;

  @media (min-width: ${BreakPoints.sm}) {
    margin-top: -${({ theme }) => theme.indents['10px']};
  }

  @media (min-width: ${BreakPoints.lg}) {
    margin-right: ${({ theme }) => theme.indents['112px']};
  }
`;

export const ListStyled = styled.ul`
  display: none;

  @media (min-width: ${BreakPoints.md}) {
    display: flex;
  }
`;

export const ListItemStyled = styled.li`
  display: none;

  @media (min-width: ${BreakPoints.lg}) {
    display: block;
    margin-left: ${({ theme }) => theme.indents['24px']};
  }

  @media (min-width: ${BreakPoints.extraLg}) {
    margin-left: ${({ theme }) => theme.indents['48px']};
  }
`;
