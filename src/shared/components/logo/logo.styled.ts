import styled from 'styled-components';

interface LogoWrapperProps {
  marginBottom?: string;
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: ${({ marginBottom }) => marginBottom};
    display: none;
  }
`;
