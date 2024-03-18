import styled from 'styled-components';

export const DetailProductDescription = styled.div`
  margin-bottom: 25px;
  margin-top: 25px;

  p {
    margin: 20px 0;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const DetailProductTitle = styled.h1`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  margin: 0 0 25px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
