import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap");

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  a{
    text-decoration: none;
  }

  .app {
    background-color: #010f40;
  }

  @media screen and (max-width: 1024px) {
    html, body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;