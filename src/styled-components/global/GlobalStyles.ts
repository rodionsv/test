import { createGlobalStyle } from 'styled-components';
import { Fonts } from './variables';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');

    * {
      box-sizing: border-box;
    
      &::before {
        box-sizing: border-box;
      }
    
      &::after {
        box-sizing: border-box;
      }
    }
    
    body {
      font-family: ${Fonts.roboto};
    }
    
    a {
      color: black;
    
      text-decoration: none;
    }
    
    img {
      display: block;
    
      max-width: 100%;
      max-height: 100%;
    
      object-fit: contain;
    }
    
    h1, h2, h3, p {
      margin: 0;
    }
    
    ul {
      padding: 0;
      margin: 0;
    
      list-style: none;
    }
`;
