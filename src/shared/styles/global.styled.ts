import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyled = createGlobalStyle`
  ${normalize}
  html {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.Black};
  }
  
  ul, ol {
    list-style: none;
    margin: 0;
  }
  
  body {
    font-family: 'Museo Sans', 'Arial', sans-serif;
    hyphens: auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  
  a {
    text-decoration: none;
  }
  
    @font-face {
    font-family: 'Museo Sans';
    font-weight: 300;
    src: local('Museo Sans Cyrl Light'), local('Museo-Sans-Cyrl-Light'),
      url('/fonts/museosanscyrl-300-webfont.woff2') format('woff2'),
      url('/fonts/museosanscyrl-300-webfont.woff') format('woff');
  }
  @font-face {
    font-family: 'Museo Sans';
    font-weight: 300;
    font-style: italic;
    src: local('Museo Sans Cyrl Light'), local('Museo-Sans-Cyrl-Light'),
      url('/fonts/museosanscyrl-300italic-webfont.woff2') format('woff2'),
      url('/fonts/museosanscyrl-300italic-webfont.woff') format('woff');
  }
  @font-face {
    font-family: 'Museo Sans';
    font-weight: 500;
    src: local('Museo Sans Cyrl Medium'), local('Museo-Sans-Cyrl-Medium'),
      url('/fonts/museosanscyrl-500-webfont.woff2') format('woff2'),
      url('/fonts/museosanscyrl-500-webfont.woff') format('woff');
  }
  @font-face {
    font-family: 'Museo Sans';
    font-weight: 500;
    font-style: italic;
    src: local('Museo Sans Cyrl Medium'), local('Museo-Sans-Cyrl-Medium'),
      url('/fonts/museosanscyrl-500italic-webfont.woff2') format('woff2'),
      url('/fonts/museosanscyrl-500italic-webfont.woff') format('woff');
  }
  @font-face {
    font-family: 'Museo Sans';
    font-weight: 700;
    src: local('Museo Sans Cyrl Bold'), local('Museo-Sans-Cyrl-Bold'),
      url('/fonts/museosanscyrl-700-webfont.woff2') format('woff2'),
      url('/fonts/museosanscyrl-700-webfont.woff') format('woff');
  }
  @font-face {
    font-family: 'Museo Sans';
    font-weight: 900;
    src: local('Museo Sans Cyrl Black'), local('Museo-Sans-Cyrl-Black'),
      url('/fonts/museosanscyrl-900-webfont.woff2') format('woff2'),
      url('/fonts/museosanscyrl-900-webfont.woff') format('woff');
  }
  
`;
