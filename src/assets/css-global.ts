import { createGlobalStyle, css } from "styled-components";

export const globalBodyStyle = css`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing: border-box;
  }

  .rs-modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalBodyStyle}
`;
