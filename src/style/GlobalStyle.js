import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Space Mono', monospace;
    /* height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }
`;

export default GlobalStyle;
