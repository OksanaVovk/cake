import { css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  @font-face {
    font-family: Montserrat, sans-serif;
    src: url('../fonts/Montserrat-Light.ttf'), format('ttf');
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: JeffScript;
    src: url('../fonts/jeff_script.woff2'), format('woff2');
    src: url('../fonts/jeff_script.ttf'), format('ttf');
  }

  @font-face {
    font-family: Moniqa;
    src: url('../fonts/Moniqa-BlackDisplay.ttf'), format('ttf');
    src: url('../fonts/Moniqa-BlackDisplay.otf'), format('otf');
  }

  body {
    margin: 0;
    font-size: 14px;
    line-height: 17px;
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  ul,
  p,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
  }
`;
