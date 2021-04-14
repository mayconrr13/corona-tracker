import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --text: #ffffff;

    --gray-900: #121212;
    --gray-800: #181818;
    --gray-700: #242424;
    --gray-600: #363636;
    --gray-100: #AAAAAA;


    --yellow: #fdcc78;
    --red: #CC002C;
    --green: #00CCAD;
    --purple: #9F3DF6;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }

  /* html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
      }
  } */

  body {
    background: var(--gray-900);
    width: 100vw;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default GlobalStyle