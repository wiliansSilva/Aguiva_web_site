import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap");

  body {
    padding: 0;
    margin: 0;
    font-family: "Inter", sans-serif;
  }
`;

export default GlobalStyle;