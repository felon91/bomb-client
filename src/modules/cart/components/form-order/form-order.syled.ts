import styled from 'styled-components';

export const FormOrderWrapper = styled.div`
  margin: 35px auto 70px;
  max-width: 615px;

  input,
  textarea {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.Primary};
    background-color: ${({ theme }) => theme.colors.Primary};
    border-radius: 10px;
    box-shadow: 0px 3px 7px 0px rgba(0, 175, 181, 0.35);
    font-size: 18px;
    line-height: 1.5;
    padding: 8px 0 8px 30px;
    box-sizing: border-box;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.Black};
    outline: none;
    display: block;
    resize: none;

    &::placeholder {
      color: #5d5d5d;
    }

    &:focus,
    &:active {
      border-color: ${({ theme }) => theme.colors.Secondary};
    }
  }

  p {
    line-height: 1.5;
    font-size: 16px;
    margin: 0;
    max-width: 605px;

    a {
      font-size: 16px;
      line-height: 1.5;
      color: $primary;
      font-weight: 700;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  b {
    font-weight: 700;
  }
`;

export const FormOrderTitle = styled.h3`
  font-size: 36px;
  line-height: 1.111;
  font-weight: 700;
  text-align: center;
  margin: 30px 0;
`;

export const FormOrderLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
`;

export const FormOrderButton = styled.button`
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
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  transition-duration: 500ms;
  transition-property: background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Secondary};
  }

  &:focus {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 15%);
  }

  &:active {
    background-color: darken(${({ theme }) => theme.colors.Primary}, 5%);
  }
  font-size: 24px;
  line-height: 1.2;
  padding: 16px 0;
  max-width: 360px;
  margin: 45px auto;
`;
