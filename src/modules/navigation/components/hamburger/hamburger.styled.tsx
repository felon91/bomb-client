import styled, { css } from 'styled-components';

interface HamburgerButtonProps {
  isOpen: boolean;
}

export const HamburgerButton = styled.button<HamburgerButtonProps>`
  @keyframes hamb-after {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes hamb-before {
    0% {
      transform: rotate(0) translate(0, 0);
    }
    100% {
      transform: rotate(-45deg) translate(-3px, 3px);
    }
  }

  display: none;
  width: 45px;
  height: 32px;
  margin-left: auto;
  border: none;
  padding: 0;
  background-color: transparent;
  appearance: none;
  cursor: pointer;

  span {
    height: 5px;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.colors.White};
    margin: 8px 0;
  }

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.colors.White};
    height: 5px;
    width: 100%;
    display: block;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.White};
    height: 5px;
    width: 100%;
    display: block;
  }
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        &::after {
          transform: rotate(45deg);
          animation-name: hamb-after;
          animation-duration: 500ms;
        }

        &::before {
          transform: rotate(-45deg) translate(-3px, 3px);
          animation-name: hamb-before;
          animation-duration: 500ms;
        }
      `;
    }
    return css``;
  }}

  @media (max-width: 980px) {
    display: block;
  }
`;
