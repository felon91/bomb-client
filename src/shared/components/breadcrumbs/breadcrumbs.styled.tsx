import styled from 'styled-components';
import Link from 'next/link';

export const BreadcrumbsElement = styled.p`
  margin: 25px 0;
  font-size: 18px;
  line-height: 1.333;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BreadcrumbsLink = styled(Link)`
  color: ${({ theme }) => theme.colors.Primary};

  &:hover {
    text-decoration: none;
  }
`;

export const BreadcrumbsSeparator = styled.span`
  margin: 0 3px;
`;

export const BreadcrumbsCurrent = styled.span`
  margin: 0;
`;
