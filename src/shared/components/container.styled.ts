import styled from 'styled-components';
import type { Indents } from '@/shared/types/types';

interface ContainerProps {
  minWidth?: string;
  maxWidth?: string;
  padding?: Indents;
  styles?: string;
}

export const Container = styled.div<ContainerProps>`
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth = '100%' }) => maxWidth};
  padding: 0 ${({ padding }) => padding};
  margin: 0 auto;
  box-sizing: border-box;
  ${({ styles }) => styles};
`;
