import styled from 'styled-components';

export const TelWrapperStyled = styled.span`
  display: flex;
  align-items: center;
`;

export const PhoneIconStyled = styled.span`
  width: 14px;
`;

export const PhoneNumberStyled = styled.span`
  margin-left: ${({ theme }) => theme.indents['6px']};
`;
