import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #091017;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;  
  }


  button {
    cursor: pointer;
    background: #A873F7;
    border: 0;

  }

  a {
    text-decoration: none;
  }
`;

export { GlobalStyle }
