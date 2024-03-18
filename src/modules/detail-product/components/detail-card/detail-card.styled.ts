import styled from 'styled-components';

export const DetailCardWrapper = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.Primary};
  box-shadow: 0 3px 7px 0 ${({ theme }) => theme.colors.Primary};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 25px 30px;
  position: relative;
  overflow: hidden;
  margin: 25px 0;
  list-style: none;
  display: flex;

  @media (max-width: 960px) {
    padding: 15px 20px;
    flex-direction: column;
  }
`;

export const DetailCardLeft = styled.li`
  flex-basis: 280px;
  margin-right: 30px;
  align-self: flex-end;

  @media (max-width: 960px) {
    flex-basis: auto;
    margin-right: 0;
    align-self: flex-start;
    width: 100%;
    margin-bottom: 25px;
  }
`;

export const DetailCardRight = styled.li`
  flex-basis: calc(100% - 310px);
  align-self: flex-end;

  @media (max-width: 960px) {
    flex-basis: auto;
    align-self: flex-start;
    width: 100%;
  }
`;

export const DetailCardHit = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.Primary};
  color: ${({ theme }) => theme.colors.White};
  font-size: 14px;
  line-height: 1.143;
  text-align: center;
  transform: translate(37px, -24px) rotate(45deg);
  padding: 18px 27px 7px;
  font-weight: 700;
`;

export const DetailCardFigure = styled.figure`
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const DetailCardPrice = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  flex-grow: 1;
  text-align: center;
  flex-basis: 135px;
`;

export const DetailCardOldPrice = styled.li`
  font-size: 20px;
  line-height: 1.4;
  text-decoration: line-through;
  font-weight: 700;
`;

export const DetailCardNewPrice = styled.li`
  font-size: 30px;
  line-height: 1.4;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Primary};
  margin: 5px 0 20px;
`;

export const DetailCardCounter = styled.li`
  max-width: 100px;
  margin: 5px auto 25px;
`;

export const DetailCardButton = styled.button`
  width: 100%;
  margin-top: 17px;
  border: none;
  background: none;
  appearance: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.White};
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.Primary};
  border-radius: 5px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
  padding: 4px 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 500ms;
  transition-property: background-color;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Secondary};
  }

  &:focus {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 15%);
  }

  &:active {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 5%);
  }
`;

export const DetailCardCharacteristics = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 15px;
`;

export const DetailCardVideo = styled.div`
  margin: 25px 0 0;
  position: relative;
  padding-bottom: 56.25%; /* задаёт высоту контейнера для 16:9 (если 4:3 — поставьте 75%) */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
