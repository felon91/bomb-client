import styled from 'styled-components';

export const OverlayWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 4;
  left: 0;
  top: 0;
  position: fixed;
  opacity: 1;
  transition-property: opacity;
  transition-duration: 500ms;
`;
