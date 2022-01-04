import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;800&display=swap');

  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    max-width: 100%;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    html, body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;