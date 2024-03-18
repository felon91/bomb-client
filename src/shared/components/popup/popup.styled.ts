import styled, { css } from 'styled-components';

interface PopupProps {
  type?: 'default' | 'video';
}

export const PopupContainer = styled.div<PopupProps>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: 30px;

  ${({ type }) => {
    if (type === 'video') {
      return css`
        overflow: inherit;
      `;
    }
    return css`
      overflow: auto;
    `;
  }}

  max-width: 800px;
  width: calc(100% - 100px);
`;

export const PopupWrap = styled.div<PopupProps>`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.White};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.Primary};
  box-shadow: 0px 3px 7px 0px rgba(0, 175, 181, 0.35);

  ${({ type }) => {
    if (type === 'video') {
      return css`
        max-height: 100%;
        padding: 0;
        overflow: inherit;
        border-radius: 0;
        display: block;
        position: relative;
        padding-bottom: 56.25%; /* задаёт высоту контейнера для 16:9 (если 4:3 — поставьте 75%) */
        height: 0;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `;
    }
    return css`
      overflow: auto;
      padding: 20px;
      max-height: 300px;
      border-radius: 10px;
    `;
  }}

  p {
    font-size: 36px;
    line-height: 1.222;
    font-weight: 700;
    margin: 20px 0;
  }

  span {
    display: block;
  }

  @media (max-width: 580px) {
    p {
      font-size: 24px;
    }
  }
`;

interface PopupCloseProps {
  closePosition?: 'default' | 'video';
}

export const PopupClose = styled.button<PopupCloseProps>`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  position: absolute;
  margin: 0;
  padding: 0;
  fill: ${({ theme }) => theme.colors.Primary};
  transition-duration: 500ms;
  transition-property: fill;

  ${({ closePosition }) => {
    if (closePosition === 'video') {
      return css`
        right: -32px;
        top: -32px;
      `;
    }
    return css`
      right: 0;
      top: 0;
    `;
  }}

  &:hover {
    fill: lighten(${({ theme }) => theme.colors.Primary}, 10%);
  }
`;
