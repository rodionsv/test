import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
    @font-face {
      font-family: 'Roboto';
      src: local('Roboto'), url(fonts/Roboto-Regular.woff) format('woff');
    }
`;
