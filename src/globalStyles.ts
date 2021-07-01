import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;

  }
  html{
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  h1{
    font-family: 'Oswald', sans-serif;
  }
`;

export default GlobalStyle;
