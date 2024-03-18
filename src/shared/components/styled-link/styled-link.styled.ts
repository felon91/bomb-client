import styled, { css } from 'styled-components';
import { ColorType } from '@/shared/types/types';

interface WrapperLinkProps {
  isBold?: boolean | undefined;
  linkColor?: ColorType | undefined;
}

export const WrapperLink = styled.span<WrapperLinkProps>`
  & > a {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    display: inline-block;

    ${({ isBold }) => {
      if (isBold) {
        return css`
          font-weight: 600;
        `;
      }
      return css``;
    }}

    ${({ linkColor }) => {
      switch (linkColor) {
        case ColorType.Gray: {
          return css`
            color: ${linkColor};
            &:hover {
              color: ${ColorType.Black};
            }
          `;
        }
        default: {
          return css`
            color: ${linkColor};
          `;
        }
      }
    }}
  }
`;
